import * as React from 'react';
import Edu from './Edu';
import Menu from '../components/Menu';
import { Divider } from '@mui/material';
import Stack from '@mui/material/Stack';

const Education = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="container rounded-xl w-full">
        <header className=" text-white py-4 flex justify-center">
          <Menu className="space-x-6" />
        </header>
        <main className="flex flex-col space-y-8">
        
          <h2 className="text-center text-3xl">Education</h2>
         
          <Edu />

        ______________________________________________________________________________________________________________________
        <h2 className="text-center text-3xl">Publication</h2>

        <Stack spacing={2}>
         <div>
          <h3>
          None
          </h3>
         </div>

        </Stack>

        </main>
      </div>
    </div>
  );
};

export default Education;