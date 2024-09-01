import axios from 'axios';

const fetchWakaTimeData = async () => {
  try {
    const response = await axios.get('https://api.wakatime.com/api/v1/users/current/stats/week', {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching WakaTime data:', error);
    return null;
  }
};