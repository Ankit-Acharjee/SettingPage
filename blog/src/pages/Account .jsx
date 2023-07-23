import React from 'react';
import Sidebar from '../components/SideBarSection/Sidebar';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
const BoxContent = () => {
  return (
    
      <div className="m-auto h-[700px] w-[750px] border-x border-b border-gray-400 rounded-2xl transition-shadow hover:shadow-2xl hover:border-0">
        <div className="relative">
          <img
            className="rounded-t-2xl w-[800px] h-[150px] absolute"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
          <div className="top-[100px] left-[50px] absolute">
            <img
              src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
              className="h-[120px] max-w-full rounded-full"
              alt=""
            />
            <p className="text-xs text-center font-sans mt-2">Second Image Description</p>
          </div>
        </div>
        <div className="lower-container relative p-8 w-80">
          <h2 className="font-sans font-bold text-3xl mb-4">Your Name</h2>
          <p className="font-sans text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est recusandae cum quae praesentium vero sapiente ullam? Voluptas amet at doloribus quis iusto qui, facere, ducimus, rerum hic voluptatem expedita?
          </p>
          <h2 className="font-sans font-bold text-xl mb-2">Skills</h2>
          <p className="font-sans text-base">Skill 1, Skill 2, Skill 3</p>
          <p className="text-xs mt-2">Additional information about skills or anything else can be placed here.</p>
        </div>
      </div>
    
  );
};

export default BoxContent;
