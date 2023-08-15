import { Box, Typography } from '@mui/material';
import { FaHamburger } from 'react-icons/fa';
import './styles.css';
const Header = () => {
  return (
    <Box component="nav">
      <Box className="header-container">
        <Box>
          <FaHamburger className="header-icon" />
        </Box>
        <Box>
          <Typography variant="h4">GPOL</Typography>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Header;
