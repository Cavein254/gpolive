import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BsFan } from 'react-icons/bs';
import { FaHamburger } from 'react-icons/fa';
import './styles.css';

const StyledSignUp = styled(Button)`
  background-color: #ff6600;
  color: #fff;
`;
const Header = () => {
  return (
    <Box component="nav">
      <Box className="header-container">
        <Box>
          <FaHamburger className="header-icon" />
        </Box>
        <Box className="header-details">
          <BsFan className="header-company-logo" />
          <Typography variant="h4">GPOL</Typography>
        </Box>
        <Box>
          <Button variant="text">Log in</Button>
          <StyledSignUp variant="contained">Sign Up</StyledSignUp>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
