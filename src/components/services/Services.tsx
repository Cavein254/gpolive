import { Box, Typography } from '@mui/material';

const Services = () => {
  return (
    <Box className="services" id="services" component="section">
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Roboto',
          fontWeight: '100',
          fontSize: '1.2rem',
          textAlign: 'center',
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          boxShadow: 1,
        }}
      >
        <Box>
          <Box className="services-icon-container">icon</Box>
          <Box className="services-content">
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '1.2rem',
              }}
            >
              heading
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: '200',
                fontSize: '1rem',
              }}
            >
              Other test
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
