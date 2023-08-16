import { Box } from '@mui/system';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';

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
      <Services />
    </Box>
  );
};

export default Home;
