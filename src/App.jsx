import "./App.css";
import DownloadButton from "./components/DownloadButton";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessIcon from "@mui/icons-material/Business";
import { Download } from "@mui/icons-material";

export default function App() {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
      
      <div className="flex items-center justify-center w-32 h-32 rounded-full mb-8 mx-auto">
        <div className="relative">
          <img
            src="https://avatars.githubusercontent.com/u/107450069?v=4"
            alt="Profile Picture"
            className="w-28 h-28 rounded-full"
          />
          <div className="absolute bottom-2 -right-5 flex items-center justify-center w-8 h-8 rounded-full bg-black group">
            <span className="text-red-500 text-xl">🦊</span>
            <div className="absolute bottom-10 -right-2 invisible group-hover:visible bg-gray-800 text-white text-xs rounded-md p-1">
              KEEP CODING
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2 text-center">Swadhin Biswas</h2>
      <p className="text-gray-400 mb-4 text-center">swadhinbiswas · he/him</p>
      <div className="relative mb-4 text-center">
        <div className="absolute inset-x-0 top-0 border-t border-blue-500"></div>
        <p className="relative pt-2 text-blue-500 font-bold">
          An Inquisitive <br />
          Back-end Developer <br /> Data Science Enthusiast
        </p>
      </div>

      <div className="flex justify-center mb-4">
        <DownloadButton />
       
      </div>

      <div className="mt-4">
        <div className="flex items-center mb-2">
          <div className="flex items-left mr-2">
            <PeopleOutlineIcon className="text-gray-400 mr-1" />
            <span className="text-gray-400">81 following</span>
          </div>

          <div className="flex items-right">
            <span className="text-gray-100">40 followers</span>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <BusinessIcon className="text-gray-400 mr-2" />
          <a
            href="https://github.com/TheBoringRats"
            target="_blank"
            className="text-gray-400"
          >
            TheBoringRats
          </a>
        </div>

        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 13.5a1.5 1.5 0 01-1.5-1.5h-.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-.5zM14.5 13.5a1.5 1.5 0 01-1.5-1.5h-.5a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5h.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-.5zM10 16a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-4.5-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          </svg>
          <span className="text-gray-400">Dhaka, Bangladesh.</span>
        </div>

        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0z" />
          </svg>
          <span className="text-gray-400">01:07 (UTC -12:00)</span>
        </div>

        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 12.138V16a2 2 0 104 0V12.138l7.997-6.254A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          </svg>
          <span className="text-gray-400">swadhinbiswas.cse@gmail.com</span>
        </div>

        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V4a1 1 0 011-1h2zm-1 9a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V12a1 1 0 011-1h2zm-9 2a1 1 0 011 1v1a1 1 0 01-1 1H2a1 1 0 01-1-1V15a1 1 0 011-1h2zm6 4a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V19a1 1 0 011-1h2zm3-13a1 1 0 011 1v1a1 1 0 01-1 1H13a1 1 0 01-1-1V3a1 1 0 011-1h2zm-3 2a1 1 0 011 1v1a1 1 0 01-1 1H8a1 1 0 01-1-1V6a1 1 0 011-1h2zm9 0a1 1 0 011 1v1a1 1 0 01-1 1H16a1 1 0 01-1-1V5a1 1 0 011-1h2zM2 3a1 1 0 011 1v1a1 1 0 01-1 1H0a1 1 0 01-1-1V4a1 1 0 011-1h2zm10 16a1 1 0 011 1v1a1 1 0 01-1 1H10a1 1 0 01-1-1V19a1 1 0 011-1h2zM8 11a1 1 0 011 1v1a1 1 0 01-1 1H7a1 1 0 01-1-1V12a1 1 0 011-1h1z" />
          </svg>
          <span className="text-gray-400">csc.com</span>
        </div>
      </div>
    </div>
  );
}
