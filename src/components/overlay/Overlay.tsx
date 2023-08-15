import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { HeaderLinks } from '../header/LinkData';
import './styles.css';

const Overlay = () => {
  const links = HeaderLinks.map((link) => {
    return (
      <Box key={link.id}>
        <Link to={link.path}>
          <Typography variant="h2">{link.name}</Typography>
        </Link>
      </Box>
    );
  });
  return (
    <Box className="overlay-container">
      <Box>{links}</Box>
      <Box></Box>
    </Box>
  );
};

export default Overlay;
