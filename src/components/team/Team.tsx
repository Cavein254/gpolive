import { Box, Stack } from '@mui/material';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import './styles.css';

const Team = () => {
  return (
    <Box className="team" component="section">
      <Box className="team-container">
        <Box></Box>
        <Box className="team-social">
          <Stack>
            <BsFacebook className="team-icon" />
          </Stack>
          <Stack>
            <BsTwitter className="team-icon" />
          </Stack>
          <Stack>
            <BsWhatsapp className="team-icon" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Team;