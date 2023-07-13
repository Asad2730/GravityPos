import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import NavBar from './components/navbar/navbar';
import './index.css'
import Login from './pages/login';
import Home from './pages/home';
import AddPurchase from './pages/Purchase/addpurchase';
import AddStock from './pages/Stock/addstock';
import PurchaseAdjustment from './pages/Purchase/purchaseAdjustment';
import PurchaseOrder from './pages/Purchase/purchaseOrder';
import PurchaseRefund from './pages/Purchase/purchaseRefund';
import AddSupplier from './pages/Supplier/add_supplier';
import Sale from './pages/Sale/sale';
import Stock_Increase_Decrease from './pages/Stock/increase_decrease';
import SalesReport from './pages/reports/sale/salesReport';
import BillPaymentReport from './pages/reports/sale/billpaymentreport';
import SaleReturnReport from './pages/reports/sale/salereturnreport';
import SoldItemReport from './pages/reports/sale/solditemreport';
import PurchaseReport from './pages/reports/purchase/purchasereport';
import PurchaseAdjustmentReport from './pages/reports/purchase/purchaseadjustmentreport';
import PurchaseReturnReport from './pages/reports/purchase/purchasereturnreport';
import StockReport from './pages/reports/stock/stockreport';
import ProductReport from './pages/reports/stock/productreport';
import ExpiryProductReport from './pages/reports/stock/expiryproductreport';
import ShortItemListReport from './pages/reports/stock/shortitemlistreport';
import StockInHandReport from './pages/reports/stock/stockinhandreport';
import ListOfVenderReport from './pages/reports/suppler/listofvenderreport';
import NarcoticsDrugRreport from './pages/reports/sale/narcoticsdrugsreport';
import NarcoticsAdjustmentReport from './pages/reports/purchase/purchaseadjustmentreport';
import Test from './test';



const CustomNav = ()=>{
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>    
    
    <Route element={<NavBar/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/sale' element={ <Sale/>}/>   
    <Route path='/purchase' element={<AddPurchase/>}/>  
    <Route path='/PurchaseRefund' element={<PurchaseRefund/>}/>
    <Route path='/PurchaseAdjustment' element={<PurchaseAdjustment/>}/>
    <Route path='/purchaseOrder' element={<PurchaseOrder/>}/>
    <Route path='/addstock' element={<AddStock/>}/>  
    <Route path='/Stock_Increase_Decrease' element={<Stock_Increase_Decrease/>}/>
    <Route path='/addSupplier' element={<AddSupplier/>}/>  

    <Route path='/salesReport' element={<SalesReport/>}/>
    <Route path='/billReport' element={<BillPaymentReport/>}/>
    <Route path='/saleReturn' element={<SaleReturnReport/>}/>
    <Route path='/soldItemReport' element={<SoldItemReport/>}/>
    <Route path='/NarcoticsDrugRreport' element={<NarcoticsDrugRreport/>}/>

    <Route path='/purchaseReport' element={<PurchaseReport/>}/>
    <Route path='/narcoticsAdjustmentReport' element={<NarcoticsAdjustmentReport/>}/>
    <Route path='/purchaseReturnReport' element={<PurchaseReturnReport/>}/>

    <Route path='/stockReport' element={<StockReport/>}/>
    <Route path='/productReport' element={<ProductReport/>}/>
    <Route path='/expiryProductReport' element={<ExpiryProductReport/>}/>
    <Route path='/shortItemListReport' element={<ShortItemListReport/>}/>
    <Route path='/stockInHandReport' element={<StockInHandReport/>}/>

    <Route path='/listOfVenderReport' element={<ListOfVenderReport/>}/>

    </Route>
  </Routes>
</BrowserRouter>
}

function App() {
  return (
   <> 
     <Test/>
   </>
  )
}



export default App;
