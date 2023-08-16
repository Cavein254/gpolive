import { Box } from '@mui/system';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonial/Testimonials';

const Home = () => {
  return (
    <Box
      sx={{
        margin: '1rem',
      }}
    >
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </Box>
  );
};

export default Home;
