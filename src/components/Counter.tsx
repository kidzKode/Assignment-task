import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('rgba(0, 0, 255, 0.1)');

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    const level = Math.min(1, count / 100); // Adjust this value as needed
    setBgColor(`rgba(0, 0, 255, ${level})`);
  }, [count]);

  const bgSpring = useSpring({ backgroundColor: bgColor });

  return (
    <animated.div style={bgSpring}>
      <Box p={2}>
        <Typography variant="h4">Counter: {count}</Typography>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleReset}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
