import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { BsFan } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { HeaderLinks } from './LinkData';
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
  const [isOpen, setIsOpen] = useState(false);
  const linkNavs = HeaderLinks.map((link) => {
    return (
      <span key={link.id} className="header-links">
        <Link to={link.path}>{link.name}</Link>
      </span>
    );
  });
  return (
    <Box component="nav">
      <Box className="header-container">
        <Box className="header-icon-container">
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
        <Box className="header-links-container">
          <Box className="header-links-wrapper">{linkNavs}</Box>
        </Box>
        <Box className="header-btns">
          <Link to="/login" className="header-link">
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
          </Link>
          <Link to="/register" className="header-link">
            <StyledSignUp variant="contained">Sign Up</StyledSignUp>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
