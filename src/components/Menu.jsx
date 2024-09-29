import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



const Menu = () => {
  return (
   <nav className="flex flex-nowrap overflow-x-auto pb-2 md:pb-0 gap-2 md:gap-1">
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap" component={Link} to="/about" >
        About
      </Button>
     
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap" component={Link} to="/projects">
        Projects
      </Button>
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap" component={Link} to="/activity">
        Activity
      </Button>
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap" component={Link} to="/skills">
        Skills
      </Button>
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap" component={Link} to="/education">
        Education
      </Button>
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
        <a 
          href="https://resilient-seahorse-288.notion.site/CodeNote-3600656e9d2c4ac5a7af45dd5bb7496d"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Notes
        </a>
      </Button>
      <Button variant="ghost" size="sm" asChild className="whitespace-nowrap">
        <Link href="/opensource">Open Source</Link>
      </Button>
    </nav>
  );
};

export default Menu;