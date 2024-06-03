import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const UserDataForm: React.FC = () => {
  const [userData, setUserData] = useState({ id: '', name: '', address: '', email: '', phone: '' });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUserData = { ...userData, id: uuidv4() };
    localStorage.setItem('userData', JSON.stringify(newUserData));
    setUnsavedChanges(false);
    setUserData(newUserData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2}>
      <Typography variant="h4">User Data Form</Typography>
      <TextField label="Name" name="name" value={userData.name} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Address" name="address" value={userData.address} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={userData.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Phone" name="phone" value={userData.phone} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
};

export default UserDataForm;
