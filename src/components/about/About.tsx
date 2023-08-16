import { Box, Typography } from '@mui/material';
import AboutImg from '../../assets/about.jpg';
import './styles.css';
const About = () => {
  return (
    <Box component="section" id="about" className="aboutus">
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Roboto',
            fontWeight: '100',
            fontSize: '1.2rem',
            textAlign: 'center',
          }}
        >
          About Us
        </Typography>
      </Box>
      <Box className="about-us-content">
        <Box className="about-us-text">
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Merriweather',
              fontSize: '1.4rem',
              fontWeight: '400',
            }}
          >
            About GPOL Career Agency
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '200',
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            minima quisquam, natus illo repellat necessitatibus modi id
            consectetur temporibus, veritatis tempore. Qui harum laudantium
            incidunt hic placeat veritatis, labore officiis.
          </Typography>
        </Box>
        <Box className="about-us-img-container">
          <img src={AboutImg} alt="aboutus" className="about-us-img" />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
