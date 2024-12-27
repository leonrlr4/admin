import { DataProvider, fetchUtils } from 'ra-core';
import { GetListParams } from 'react-admin';
import { CreateParams, UpdateParams, DeleteParams } from 'react-admin';
import { RaRecord } from 'react-admin';

interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: any[];
}

const apiUrl = 'https://unicorn-studio-api.shimmingtech.com';

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    if (token) {
        options.headers.set('Authorization', `JWT ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
    getList: async (resource, params: GetListParams) => {
        const { page = 1, perPage = 50 } = params.pagination || {};
        const url = `${apiUrl}/${resource}/?limit=${perPage}&offset=${(page - 1) * perPage}`;
        
        const { json } = await httpClient(url) as { json: ApiResponse };
        
        return {
            data: json.results,
            total: json.count
        };
    },
    getOne: async (resource, params) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
        return { data: json };
    },

    create: async (resource, params: CreateParams) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        return { data: { ...params.data, id: json.id } as any };
    },

    update: async (resource, params: UpdateParams) => {
        const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        return { data: json };
    },

    delete: async <RecordType extends RaRecord = any>(
        resource: string,
        params: DeleteParams<RecordType>
    ): Promise<{ data: RecordType }> => {
        await httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        });
        return { data: params.previousData as RecordType };
    },

    deleteMany: async (resource, params) => {
        const promises = params.ids.map(id =>
            httpClient(`${apiUrl}/${resource}/${id}`, {
                method: 'DELETE',
            })
        );
        await Promise.all(promises);
        return { data: [] };
    },

    getMany: async (resource, params) => {
        const promises = params.ids.map(id =>
            httpClient(`${apiUrl}/${resource}/${id}`).then(({ json }) => json)
        );
        const results = await Promise.all(promises);
        return { data: results };
    },

    getManyReference: async (resource, params) => {
        const { pagination } = params;
        if (!pagination) throw new Error('Pagination is required');
        
        const url = `${apiUrl}/${resource}/?limit=${pagination.perPage}&offset=${(pagination.page - 1) * pagination.perPage}`;
        
        const { json } = await httpClient(url);
        return {
            data: json,
            total: json.length
        };
    },

    updateMany: async (resource, params) => {
        const promises = params.ids.map(id =>
            httpClient(`${apiUrl}/${resource}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            })
        );
        await Promise.all(promises);
        return { data: params.ids };
    },
};