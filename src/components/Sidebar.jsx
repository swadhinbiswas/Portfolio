import React from "react";
import DownloadButton from "./DownloadButton";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceTwoToneIcon from "@mui/icons-material/PlaceTwoTone";
import DigitalClock from "./DigitalClock";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BiotechIcon from "@mui/icons-material/Biotech";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="flex items-center justify-center w-32 h-32 rounded-full mb-8 mx-auto">
        <div className="relative">
          <img
            src="https://storage.googleapis.com/kaggle-avatars/images/13241788-kg.png"
            alt="Profile Picture"
            className="w-28 h-28 rounded-full"
          />
          <div className="absolute bottom-2 -right-5 flex items-center justify-center w-8 h-8 rounded-full bg-black group">
            <span className="text-red-500 text-xl">🦊</span>
            <div
              className="absolute -bottom-4 -right-20 invisible group-hover:visible align-top 
            	text-decoration-line: underline bg-gray-500 
               text-cyan-400 text-xs rounded-md font-bold
               font-weight:800 p-1"
            >
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
            <PeopleOutlineIcon className="text-gray-100 mr-1" />
            <span
              className="text-gray-1
            00"
            >
              81 following
            </span>
          </div>

          <div className="flex items-right">
            <span className="text-gray-100">40 followers</span>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <BusinessIcon className="text-gray-100 mr-2" />
          <a
            href="https://github.com/TheBoringRats"
            target="_blank"
            className="text-gray-100"
          >
            TheBoringRats
          </a>
        </div>

        <div className="flex items-center mb-2">
          <PlaceTwoToneIcon className="text-gray-100 mr-2 " />

          <span className="text-gray-100">Dhaka, Bangladesh.</span>
        </div>

        <div className="flex items-center mb-2">
          <WatchLaterIcon className="text-gray-100 mr-2" />
          <span className="text-gray-100">
            <DigitalClock />
          </span>
        </div>

        <div className="flex items-center mb-2">
          <MailOutlineIcon className="text-gray-100 mr-2" />
          <a
            href="mailto:swadhinbiswas.cse@gmail.com"
            target="_blank"
            className="text-gray-100"
          >
            swadhinbiswas.cse@gmail.com
          </a>
        </div>

        <div className="flex items-center mb-2">
          <BiotechIcon className="text-gray-100 mr-2" />
          <a
            href="https://orcid.org/0009-0005-2980-6651"
            target="_blank"
            className="text-gray-100"
          >
            ORCID
          </a>
        </div>
        <div className="flex items-center mb-2">
          <LinkedInIcon className="text-gray-100 mr-2" />
          <a
            href="https://www.linkedin.com/in/swadh1n/"
            target="_blank"
            className="text-gray-100"
          >
            /in/swadh1n
          </a>
        </div>
        <div className="flex items-center mb-2">
          <TwitterIcon className="text-gray-100 mr-2" />
          <a
            href="https://twitter.com/swadh1n"
            target="_blank"
            className="text-gray-100"
          >
            @swadh1n
          </a>
        </div>
        <div className="flex items-center mb-2">
          <QueryStatsIcon className="text-gray-100 mr-2" />
          <a
            href="https://www.kaggle.com/swadhinbiswas"
            target="_blank"
            className="text-gray-100"
          >
            Kaggle
          </a>
        </div>
        <div className="flex items-center mb-2">
          <GitHubIcon className="text-gray-100 mr-2" />
          <a
            href="https://github.com/swadhinbiswas"
            target="_blank"
            className="text-gray-100"
          >
            swadhinbiswas
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
