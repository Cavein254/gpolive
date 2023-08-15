import { Box, Stack } from '@mui/system';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFan } from 'react-icons/bs';

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
      <Stack key={link.id}>
        <Box className="overlay-link">
          <Link to={link.path}>{link.name}</Link>
        </Box>
      </Stack>
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
      <Box className="overlay-links-container">
        <Box>
          <BsFan className="overlay-icon" />
        </Box>
        <Box className="overlay-links-wrapper">{links}</Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Overlay;
