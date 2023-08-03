/* eslint-disable no-unused-vars */

import React from 'react';



import './App.css';

import { BrowserRouter , Router,  Route, Routes } from 'react-router-dom';
import Account from './pages/Account '
import Sidebar from './components/SideBarSection/Sidebar';
import SidebarSm from './components/SideBarSection/SidebarSm.jsx'



const App = () => {
  // const activeMenu = false
  // const deviceWidth = window.innerWidth;
  // const toggle=()=>{
  //   if(deviceWidth<768)
  //   return (
  //   <SidebarSm/>)

  //   else
  //   return <Sidebar/>
  // }
  
  return (
    <div className=''>      
       {/* {toggle() }
       {console.log(deviceWidth)} */}
       <Sidebar/>
    </div>
);
} 
export default App