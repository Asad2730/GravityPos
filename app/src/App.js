import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import NavBar from './components/navbar/navbar';
import './index.css'
import Login from './pages/login';
import Home from './pages/home';
import AddPurchase from './pages/Purchase/addpurchase';
import Stock from './pages/Stock/stock';
import PurchaseAdjustment from './pages/Purchase/purchaseAdjustment';
import PurchaseOrder from './pages/Purchase/purchaseOrder';
import PurchaseRefund from './pages/Purchase/purchaseRefund';
import AddSupplier from './pages/Supplier/add_supplier';
import Sale from './pages/Sale/sale';
import Stock_Increase_Decrease from './pages/Stock/increase_decrease';


function App() {
  return (
   <>
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
          <Route path='/stock' element={<Stock/>}/>  
          <Route path='/Stock_Increase_Decrease' element={<Stock_Increase_Decrease/>}/>
          <Route path='/addSupplier' element={<AddSupplier/>}/>  
          
          </Route>
        </Routes>
     </BrowserRouter>
   </>
  );
}



export default App;
