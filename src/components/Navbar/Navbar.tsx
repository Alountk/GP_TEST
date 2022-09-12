import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const stateFavorites = useSelector((store: AppStore) => store.favorites);
  
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gentleman Programming React TEST
            </Typography>
            <IconButton color="secondary" onClick={handleClick}>
              <FavoriteBorderOutlined />{' '}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
