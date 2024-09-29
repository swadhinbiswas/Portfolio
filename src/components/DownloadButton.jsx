import * as React from 'react';
import Button from '@mui/material/Button';
import DownloadingIcon from '@mui/icons-material/Downloading';


const DownloadButton = () => {
  const handleDownload = () => {
  // Create a link element
  const link = document.createElement('a')
  link.href = '/cv.pdf' // Assuming the CV is in the public folder
  link.download = 'swadhinbiswasCV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
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
