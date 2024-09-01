import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-progressbar';
import axios from 'axios';

const TimeSpentComponent = () => {
  const [wakaTimeData, setWakaTimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.wakatime.com/api/v1/users/current/stats/week', {
          headers: {
            Authorization: `Bearer API KEY`, // Replace with your actual API key
          },
        });

        setWakaTimeData(response.data.data);
      } catch (error) {
        console.error('Error fetching WakaTime data:', error);
      }
    };

    fetchData();
  }, []);

  if (!wakaTimeData) {
    return <div>Loading...</div>;
  }

  const { languages, operating_systems } = wakaTimeData;

  return (
    <div>
      <h2>This Week I Spent My Time On</h2>
      <p>Time Zone: Asia/Kolkata</p>
      <h3>Programming Languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language.name}>
            {language.name}: {language.total_seconds} seconds ({language.percent}%)
            <ProgressBar
              width={100}
              max={100}
              initial={language.percent}
              color="#3498db" // Blue
              fill="#e67e22" // Orange
            />
          </li>
        ))}
      </ul>
      <h3>Operating System:</h3>
      <ul>
        {operating_systems.map((os) => (
          <li key={os.name}>
            {os.name}: {os.total_seconds} seconds ({os.percent}%)
            <ProgressBar
              width={100}
              max={100}
              initial={os.percent}
              color="#3498db" // Blue
              fill="#e67e22" // Orange
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSpentComponent;