

import NavBar from '@/Components/navBar';
// import { Container, Typography, Box } from '@mui/material'; // MUI components for styling
import About from '@/Components/about/about';
import '@/app/globals.css'
const App: React.FC = () => {
  return (
    <div className='site-wrapper'>
      <NavBar />
      <About />
    </div>
  );
};

export default App;


