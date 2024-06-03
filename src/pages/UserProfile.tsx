import React from 'react';
import { Box, Typography } from '@mui/material';

const UserProfile: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <Box p={2}>
      <Typography variant="h4">User Profile</Typography>
      <Typography>Name: {userData.name}</Typography>
      <Typography>Address: {userData.address}</Typography>
      <Typography>Email: {userData.email}</Typography>
      <Typography>Phone: {userData.phone}</Typography>
    </Box>
  );
};

export default UserProfile;
