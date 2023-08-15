import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BsFan } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import './styles.css';
const StyledSignUp = styled(Button)`
  background-color: #ff6600;
  color: #fff;
  font-size: 0.8rem;
  border-radius: 0;

  '&:hover': {
    background-color: '#fff';
    color: '#ff6600';
  }
`;
const Header = () => {
  return (
    <Box component="nav">
      <Box className="header-container">
        <Box>
          <GiHamburgerMenu className="header-icon" />
        </Box>
        <Box className="header-details">
          <BsFan className="header-company-logo" />
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Merriweather',
              fontWeight: '900',
              fontSize: '1.8rem',
            }}
          >
            GPOL
          </Typography>
        </Box>
        <Box className="header-btns">
          <Button
            variant="text"
            className="header-login-btn"
            sx={{
              marginRight: '0.4rem',
              fontSize: '1rem',
            }}
          >
            Log In
          </Button>
          <StyledSignUp variant="contained">Sign Up</StyledSignUp>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
