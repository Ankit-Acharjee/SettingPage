
import React from 'react';



import './App.css';

import { BrowserRouter , Router,  Route, Routes } from 'react-router-dom';
import Account from './pages/Account '
import Sidebar from './components/SideBarSection/Sidebar';




const App = () => {
  const activeMenu = false
  return (
    <div className=''>

    <Sidebar/>
    </div>

  
);
}
   
  
export default App