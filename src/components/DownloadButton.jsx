import * as React from 'react';
import Button from '@mui/material/Button';
import DownloadingIcon from '@mui/icons-material/Downloading';

const DownloadButton = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'src/assets/cv.pdf'; // Replace with the path to your CV
    link.download = 'cv.pdf'; // The file name for the downloaded CV
    link.click(); // Programmatically click the link to trigger the download
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      onClick={handleDownload}
      startIcon={<DownloadingIcon />

      }
    >
      <span style={{ fontWeight: 'bold' }}>Download CV</span>
    </Button>
  );
};

export default DownloadButton;
