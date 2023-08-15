import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HeaderLinks } from '../header/LinkData';
import './styles.css';

type Props = {
  isOpen: Boolean;
  setIsOpen(value: Boolean): () => void;
};
const Overlay = ({ isOpen, setIsOpen }: Props) => {
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
      <Box className="overlay-close-container">
        <AiFillCloseCircle
          className="overlay-close-btn"
          onClick={() => setIsOpen(!isOpen)}
        />
      </Box>
      <Box className="overlay-links-container">{links}</Box>
      <Box></Box>
    </Box>
  );
};

export default Overlay;
