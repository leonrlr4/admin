import { 
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  DateField,
  TextInput
} from 'react-admin';

export const accountFilters = [
    <TextInput source="search" alwaysOn />
];

export const AccountList = () => (
  <List 
    filters={accountFilters}
    sort={{ field: 'id', order: 'DESC' }}
    perPage={50}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="extra.business_name" />
      <TextField source="extra.phone" />
      <TextField source="rule" />
      <BooleanField source="is_active" />
      <BooleanField source="is_staff" />
      <DateField source="date_joined" showTime />
      <DateField source="last_login" showTime />
      <DateField source="expired_time" showTime />
      <TextField source="login_ip" />
    </Datagrid>
  </List>
);

