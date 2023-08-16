import { Box, Stack } from '@mui/system';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsFan } from 'react-icons/bs';

import { Typography } from '@mui/material';
import { BiLogInCircle } from 'react-icons/bi';
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
      <Box className="overlay-bottom">
        <BiLogInCircle className="overlay-icon" />
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '900',
            color: '#ff6600',
            fontSize: '2rem',
          }}
        >
          Log Out
        </Typography>
      </Box>
    </Box>
  );
};

export default Overlay;
