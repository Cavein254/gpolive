import { Box, Typography } from '@mui/material';
import './styles.css';

const Testimonials = () => {
  return (
    <Box component="section" id="testimonials">
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: '100',
              fontSize: '1.2rem',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '900',
              fontSize: '1.8rem',
              textAlign: 'center',
            }}
          >
            What Clients Say about Us
          </Typography>
        </Box>
        <Box>
          <Box>
            <Box>
              <Box></Box>
            </Box>
            <Box>
              <Box className="testimonial-text">
                <Typography variant="h5">
                  Get a fully retina ready site when you build with Startup
                  Framework. Websites look sharper and more gorgeous on devices
                  with retina display support
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5">Rayhan Curran</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
