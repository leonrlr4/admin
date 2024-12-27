import {
    Show,
    SimpleShowLayout,
    TextField,
    EmailField,
    DateField,
    BooleanField
  } from 'react-admin';
  
  export const AccountShow = () => (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="business_name" />
        <TextField source="resale" />
        <TextField source="address" />
        <TextField source="city" />
        <TextField source="state" />
        <TextField source="country" />
        <TextField source="zip_code" />
        <TextField source="phone" />
        <TextField source="fax" />
        <TextField source="owner_officer" />
        <TextField source="business_website" />
        <TextField source="organization_type" />
        <TextField source="business_location" />
        <TextField source="business_type" />
        <TextField source="monthly_book_sales" />
        <TextField source="employee_count" />
        <BooleanField source="is_active" />
        <BooleanField source="is_staff" />
        <DateField source="date_joined" />
        <DateField source="last_login" />
        <TextField source="rule" />
      </SimpleShowLayout>
    </Show>
  );
  