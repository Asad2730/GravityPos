import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import NavBar from './components/navbar/navbar';
import './index.css'
import Login from './pages/login';
import Sale from './pages/sale';

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<NavBar/>}>
          <Route path='/sale' element={<Sale/>}/>  
          </Route>
        </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
