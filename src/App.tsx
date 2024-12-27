import { Admin, Resource } from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { LoginPage } from "./pages/LoginPage";


// 資源組件引入
import {
  AccountList,
  AccountEdit,
  AccountCreate,
  AccountShow
} from "./resources/accounts";

// import {
//   CommodityList, 
//   CommodityEdit,
//   CommodityCreate,
//   CommodityShow
// } from "./resources/commodities";

// import {
//   OrderList,
//   OrderEdit,
//   OrderCreate,
//   OrderShow
// } from "./resources/orders";

// import {
//   BillList,
//   BillEdit,
//   BillCreate,
//   BillShow
// } from "./resources/bills";

export const App = () => (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={LoginPage}
    >
    <Resource 
      name="account"
      list={AccountList}
      edit={AccountEdit}
      create={AccountCreate}
      show={AccountShow}
    />
    
    {/* <Resource
      name="commodity"
      list={CommodityList}
      edit={CommodityEdit} 
      create={CommodityCreate}
      show={CommodityShow}
    />

    <Resource
      name="order"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate} 
      show={OrderShow}
    />

    <Resource
      name="bill"
      list={BillList}
      edit={BillEdit}
      create={BillCreate}
      show={BillShow}
    /> */}
  </Admin>
);
