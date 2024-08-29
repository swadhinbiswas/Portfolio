import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Dhaka',
      hour12: false, // Use 24-hour format
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="flex items-center justify-center s-screen">
      <p className="text-white ">
        Local Time: {formatTime(time)} (UTC +6)
      </p>
    </div>
  );
};

export default DigitalClock;
