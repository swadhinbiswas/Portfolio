import * as React from 'react';
import Button from '@mui/material/Button';
import DownloadingIcon from '@mui/icons-material/Downloading';

const downloadLink = document.createElement('a'); // Create the link outside the component

const DownloadButton = () => {
  downloadLink.href = 'https://drive.google.com/uc?export=download&id=1fanEibx6ZCWW0c3MRJv_2-6fGz006Dnb'; // Assuming the CV is in the public folder
  downloadLink.download = 'cv.pdf';

  const handleClick = () => {
    downloadLink.click(); // Reuse the existing link
  };

  return (
    <Button
      variant="contained"
      tabIndex={-1}
      onClick={handleClick}
      startIcon={<DownloadingIcon />}
    >
      <span style={{ fontWeight: 'bold' }}>Download CV</span>
    </Button>
  );
};

export default DownloadButton;