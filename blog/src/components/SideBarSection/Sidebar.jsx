import React, { useEffect, useState } from 'react';

import Settings from '../../Assets/settings.png';
import './sidebar.css';
import { CgProfile } from 'react-icons/cg';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdOutlinePrivacyTip, MdOutlineVerified } from 'react-icons/md';
import { BiLogoGmail } from 'react-icons/bi';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineWidgets } from 'react-icons/md';
import { BsDatabaseCheck } from 'react-icons/bs';
import { AiOutlineUserDelete } from 'react-icons/ai';
import  { LuSettings }  from 'react-icons/lu';
import { VscVerifiedFilled } from "react-icons/vsc"

const Sidebar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    
      <div className="sidebar  bg-white  max-w-full flex flex-col p-4 rounded-lg my-8" >
      
        <div className="logoDiv flex  cursor-pointer mb-4 pb-2 gap-3">
          {/* <img src={Settings} alt="Image Name" className=" w-20 h-auto mr-2 bg-gray-300 rounded p-2" /> */}
          <LuSettings className='text-4xl'/>
          <h2 className="text-primary font-bold text-3xl">Settings</h2>
        </div>

        <div className="menuDiv p-4">
          <div className='flex items-center justify-center gap-2'>
            <h2 className="divTittle text-2xl font-bold text-black text-center">Hi, Gaurav</h2>
            <VscVerifiedFilled className='text-2xl text-green-600' />
          </div>
          <ul className="menuLists">
            <li className="listItem relative py-3 px-4">
              <a
                href="#"
                className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl"
              >
                <CgProfile className="icon mr-3" />
                <span className="smallText">Account</span>
                
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a
                href="#"
                className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl"
              >
                <RiLockPasswordFill className="icon mr-3" />
                <span className="smallText">Password</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl">
                <MdOutlinePrivacyTip className="icon mr-3" />
                <span className="smallText">Privacy and Safety</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl">
                <BiLogoGmail className="icon mr-3" />
                <span className="smallText">Email Notification</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-600 text-xl">
                <GrNotification className="icon mr-3" />
                <span className="smallText">Web Notification</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl">
                <MdOutlineWidgets className="icon mr-3" />
                <span className="smallText">Widgets</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl">
                <BsDatabaseCheck className="icon mr-3" />
                <span className="smallText">Your data</span>
              </a>
            </li>
            <li className="listItem relative py-3 px-4">
              <a href="#" className="menuLink flex items-center text-gray-600 font-medium transition duration-300 hover:cursor-pointer hover:text-blue-500 text-xl">
                <AiOutlineUserDelete className="icon mr-3" />
                <span className="smallText">Delete account</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text text-lg">Theme mode</span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === 'dark'}
                onChange={handleToggle}
              />
            </label>
          </div>
        </div>
      </div>
   
  );
};

export default Sidebar;
