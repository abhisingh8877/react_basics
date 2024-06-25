import { Suspense, lazy, useState } from 'react'
import React from 'react';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import './App.css'
import Appbar from './Components/Appbar'
const Dahsboard=lazy(()=>import('./Components/Dashboard'));
const Landing=lazy(()=>import('./Components/Landing'));

function App() {
 
  
   return(
    
     <BrowserRouter>
     <Appbar/>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"loading.."}><Dahsboard/></Suspense>}/>
        <Route path='/' element={<Suspense fallback={"loading.."}><Landing/></Suspense>}/>
      </Routes>
     </BrowserRouter>
  
   )
}

export default App
