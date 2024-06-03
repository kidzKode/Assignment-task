import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">My App</Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/login">Profile</Button>
    </Toolbar>
  </AppBar>
);

export default Navigation;
