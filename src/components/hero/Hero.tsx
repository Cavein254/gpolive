import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import HeroImg from '../../assets/hero.jpg';
import './style.css';

const Hero = () => {
  return (
    <Box>
      <Box className="hero-text">
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Merriweather',
              fontSize: '3rem',
              lineHeight: '0.85',
              fontWeight: '400',
            }}
          >
            Empowering Your Career Journey with{' '}
            <span className="gpol">GPOL</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Dancing Script',
              fontSize: '2rem',
            }}
          >
            Your Success, Our Priority.
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box>
        <img src={HeroImg} alt="Hero" className="hero-img" />
      </Box>
    </Box>
  );
};

export default Hero;
