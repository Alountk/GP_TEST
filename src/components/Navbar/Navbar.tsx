import { AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';


export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gentleman Programming React TEST
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>;
};

export default Navbar;

