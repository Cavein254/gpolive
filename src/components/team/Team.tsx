import { Box, Typography } from '@mui/material';
import './styles.css';
const Team = () => {
  return (
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
          Our Team
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Merriweather',
            fontSize: '1.4rem',
            fontWeight: '400',
          }}
        >
          Meet the Team
        </Typography>
      </Box>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Team;
