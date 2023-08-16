import { Box, Typography } from '@mui/material';
import './styles.css';

const Subscribe = () => {
  return (
    <Box className="subscribe">
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
          Subscribe
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
          Subscribe to our NewsLetter{' '}
        </Typography>
      </Box>
    </Box>
  );
};

export default Subscribe;
