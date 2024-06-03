import React from 'react';
import { Box } from '@mui/material';
import Counter from '../components/Counter';
import UserDataForm from '../components/UserDataForm';
import RichTextEditor from '../components/RichTextEditor';

const Home: React.FC = () => (
  <Box p={2}>
    <Counter />
     <UserDataForm />
    <RichTextEditor /> 
  </Box>
);

export default Home;
