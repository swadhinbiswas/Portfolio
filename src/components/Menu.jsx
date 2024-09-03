import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Menu = () => {
  return (
    <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
      {/* Use Link component for navigation */}
      <Button variant="outlined" component={Link} to="/about">
        About
      </Button>
      <Button variant="outlined" component={Link} to="/projects">
        Projects
      </Button>
      <Button variant="outlined" component={Link} to="/activity">
        Activity
      </Button>
      <Button variant="outlined" component={Link} to="/skills">
        Skills
      </Button>
      <Button variant="outlined" component={Link} to="/education">
        Education
      </Button>
      <a href="https://resilient-seahorse-288.notion.site/CodeNote-3600656e9d2c4ac5a7af45dd5bb7496d"
      target="_blank" rel="noreferrer"
      >
      <Button variant="outlined">
        Notes
      </Button>
      </a>
      <Button variant="outlined" component={Link} to="/opensource">
        Open Source
      </Button>
    </Stack>
  );
};

export default Menu;