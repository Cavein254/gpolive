import { Box } from '@mui/system';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';

const Home = () => {
  return (
    <Box
      sx={{
        margin: '1rem',
      }}
    >
      {' '}
      <Hero />
      <About />
    </Box>
  );
};

export default Home;
