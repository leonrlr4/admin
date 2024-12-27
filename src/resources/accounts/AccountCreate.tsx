import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    required,
    email,
    NumberInput
  } from 'react-admin';
  
  export const AccountCreate = () => (
    <Create>
      <SimpleForm>
        <TextInput source="email" validate={[required(), email()]} />
        <TextInput source="username" validate={[required()]} />
        <TextInput source="password" validate={[required()]} />
        <TextInput source="business_name" />
        <TextInput source="resale" />
        <TextInput source="address" />
        <TextInput source="city" />
        <TextInput source="state" />
        <TextInput source="country" />
        <TextInput source="zip_code" />
        <TextInput source="phone" />
        
        <SelectInput 
          source="organization_type"
          validate={[required()]}
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
          validate={[required()]}
          choices={[
            { id: 'home', name: 'Home' },
            { id: 'commercialbuilding', name: 'Commercial Building' }
          ]}
        />
        
        <SelectInput
          source="business_type"
          validate={[required()]}
          choices={[
            { id: 'manufacturer', name: 'Manufacturer' },
            { id: 'importer', name: 'Importer' },
            { id: 'wholesaler', name: 'Wholesaler' },
            { id: 'brickandmortar', name: 'Brick and Mortar' },
            { id: 'ecommerce', name: 'E-Commerce' },
            { id: 'other', name: 'Other' }
          ]}
        />
  
        <SelectInput
          source="monthly_book_sales"
          validate={[required()]}
          choices={[
            { id: 'firststage', name: '$0 to $500' },
            { id: 'secondstage', name: '$501 to $1,000' },
            { id: 'thirdstage', name: '$1,001 to $2,500' },
            { id: 'forthstage', name: '$2,501 to $5,000' },
            { id: 'fifthstage', name: '$5,001 to UP' }
          ]}
        />
  
        <NumberInput source="employee_count" defaultValue={0} />
      </SimpleForm>
    </Create>
  );
  