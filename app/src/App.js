import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import NavBar from './components/navbar/navbar';
import './index.css'
import Login from './pages/login';
import Sale from './pages/Sale/sale';
import Home from './pages/home';
import AddPurchase from './pages/Purchase/addpurchase';
import Stock from './pages/Stock/stock';
import Supplier from './pages/Supplier/supplier';
import PurchaseReturnAgainistBill from './pages/Purchase/returnAgainstBill';
import PurchaseAdjustment from './pages/Purchase/purchaseAdjustment';


function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>    
          <Route element={<NavBar/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sale' element={<Sale/>}/>   
          <Route path='/purchase' element={<AddPurchase/>}/>  
          <Route path='/PurchaseReturnAgainistBill' element={<PurchaseReturnAgainistBill/>}/>
          <Route path='/PurchaseAdjustment' element={<PurchaseAdjustment/>}/>
          <Route path='/stock' element={<Stock/>}/>  
          <Route path='/supplier' element={<Supplier/>}/>  
          </Route>
        </Routes>
     </BrowserRouter>
   </>
  );
}



export default App;
