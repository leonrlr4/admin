import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    SelectInput,
    required,
    email
  } from 'react-admin';
  
  export const AccountEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="username" validate={[required()]} />
        <TextInput source="business_name" />
        <TextInput source="resale" />
        <TextInput source="address" />
        <TextInput source="city" />
        <TextInput source="state" />
        <TextInput source="country" />
        <TextInput source="zip_code" />
        <TextInput source="phone" />
        <TextInput source="fax" />
        <TextInput source="owner_officer" />
        <TextInput source="business_website" />
        <SelectInput 
          source="organization_type"
          choices={[
            { id: 'soleproprietor', name: 'Sole Proprietor' },
            { id: 'partnership', name: 'Partnership' },
            { id: 'singlelcc', name: 'Single LLC' },
            { id: 'corpstate', name: 'Corp (State)' },
            { id: 'other', name: 'Other' }
          ]}
        />
        <SelectInput
          source="business_location"
          choices={[
            { id: 'home', name: 'Home' },
            { id: 'commercialbuilding', name: 'Commercial Building' }
          ]}
        />
        <SelectInput
          source="business_type"
          choices={[
            { id: 'manufacturer', name: 'Manufacturer' },
            { id: 'importer', name: 'Importer' },
            { id: 'wholesaler', name: 'Wholesaler' },
            { id: 'brickandmortar', name: 'Brick and Mortar' },
            { id: 'ecommerce', name: 'E-Commerce' },
            { id: 'other', name: 'Other' }
          ]}
        />
        <BooleanInput source="is_active" />
      </SimpleForm>
    </Edit>
  );
  