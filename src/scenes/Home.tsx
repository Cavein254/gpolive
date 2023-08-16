import { Box } from '@mui/system';
import About from '../components/about/About';
import Header from '../components/header/Header';
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
      {' '}
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </Box>
  );
};

export default Home;
