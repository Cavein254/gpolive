import { Box, Typography } from '@mui/material';

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
      </Box>
    </Box>
  );
};

export default Testimonials;
