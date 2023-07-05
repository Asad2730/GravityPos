import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import NavBar from './components/navbar/navbar';
import './index.css'
import Login from './pages/login';
import Sale from './pages/sale';
import Home from './pages/home';
import Purchase from './pages/purchase';
import Stock from './pages/stock';
import Supplier from './pages/supplier';
import Calculator from './pages/calculator';


function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
       
          <Route element={<NavBar/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/sale' element={<Sale/>}/>   
          <Route path='/purchase' element={<Purchase/>}/>  
          <Route path='/stock' element={<Stock/>}/>  
          <Route path='/supplier' element={<Supplier/>}/>  
          <Route path='/calculator' element={<Calculator/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
   </>
  );
}



export default App;
