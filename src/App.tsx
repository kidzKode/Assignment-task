import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => (
  <Router>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
