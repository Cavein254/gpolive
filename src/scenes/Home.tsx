import { Box } from '@mui/system';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Subscribe from '../components/subscribe/Subscribe';
import Team from '../components/team/Team';
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
      <Team />
      <Subscribe />
    </Box>
  );
};

export default Home;
