import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      localStorage.setItem('auth', 'true');
      navigate('/profile');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={2} maxWidth={400} mx="auto">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Email"
        name="email"
        type="email"
        value={credentials.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
