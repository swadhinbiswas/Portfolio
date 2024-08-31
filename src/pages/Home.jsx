import React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import About from '../components/About';

const Home = () => {
  return (

    <div className=' rounded-lg  flex '>
       <div className="bg-gray-800  w-full space-x-4 flex rounded-lg border border-blue-500">
      <div className="flex h-full space-x-9">
        <Sidebar className="bg-gray-800 w-1/4" />
        <div className="flex-1 flex flex-col -left-1 space-y-14">
          <div className="mt-10 ">
            <Menu className="bg-gray-900 " />
          </div>
          <div className='flex '>
          <About className="flex-1 bg-gray-900 p-4"/>

          </div>
         
          
        </div>

      </div>
    </div>

    </div>
  //   <div className="flex h-screen">
  //   <Sidebar className="bg-gray-800 w-1/4 md:w-1/5 lg:w-1/6" />
  //   <div className="flex-1 flex flex-col space-y-14 p-4">
  //     <Menu className="bg-gray-900" />
  //     <About className="flex-1 bg-gray-900" />
  //   </div>
  // </div>

   
  );
};

export default Home;