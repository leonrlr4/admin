import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
    login: ({ username, password }) => {
        return fetch('https://unicorn-studio-api.shimmingtech.com/account/login', {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify({
                    ...auth,
                    user_id: 46, // 從 JWT 解碼獲得
                    rule: auth.rule
                }));
                localStorage.setItem('token', auth.access_token);
                localStorage.setItem('refresh_token', auth.refresh_token);
                localStorage.setItem('expired_time', auth.expired_time);
            });
    },
    logout: () => {
        const refresh_token = localStorage.getItem('refresh_token');
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('expired_time');
        
        return fetch('https://unicorn-studio-api.shimmingtech.com/account/logout', {
            method: 'POST',
            body: JSON.stringify({ refresh_token }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        }).then(() => Promise.resolve());
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getIdentity: () => {
        const auth = JSON.parse(localStorage.getItem('auth') || '{}');
        return Promise.resolve({
            id: auth.user_id,
            fullName: auth.email,
            role: auth.rule
        });
    },
    getPermissions: () => {
        const auth = JSON.parse(localStorage.getItem('auth') || '{}');
        return Promise.resolve(auth.rule);
    }
};

export default authProvider;