import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Menu = () => {
  return (
    <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
      <Button variant="outlined" href="#outlined-buttons">
        About
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Projects
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Activity
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Skills
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Education
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        Notes
      </Button>
      <Button variant="outlined" href="#outlined-buttons">
        OPEN SOURCE
      </Button>
    </Stack>
  )
}

export default Menu