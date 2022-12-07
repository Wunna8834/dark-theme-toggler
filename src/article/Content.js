import React from 'react';
import './Content.css';
import { useTheme, useUpdateTheme } from '../context/ThemeProvider';

export const Content = () => {
  const darkTheme = useTheme();
  const toggleTheme = useUpdateTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#F0E9D2' : '#181D31',
    color: darkTheme ? '#000' : '#fff',
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    fontSize: '2rem'
  }
  return (
   <div style={themeStyles}>
     <button onClick={toggleTheme} style={{fontSize: '1rem', padding: '1rem'}}>Switch to {darkTheme === true? 'dark' : 'light'} mode</button>
     <div>Here is the content page.</div>
   </div>
  )
}
