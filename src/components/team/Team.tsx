import { Box, Stack, Typography } from '@mui/material';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import './styles.css';
import { TeamData } from './teamdata';

const Team = () => {
  const teams = TeamData.map((team) => {
    return (
      <Box className="team-container" key={team.id}>
        <Box className="team-details">
          <Box className="team-img-container">
            <img src={team.url} alt="user" className="team-image" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#1E0E62',
                fontFamily: 'Merriweather',
                fontWeight: '400',
                fontSize: '1.3rem',
              }}
            >
              {team.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'gray',
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '0.8rem',
              }}
            >
              {team.post}
            </Typography>
          </Box>
        </Box>
        <Box className="team-social">
          <Stack className="team-icon-container">
            <BsFacebook className="team-icon" />
          </Stack>
          <Stack className="team-icon-container">
            <BsTwitter className="team-icon" />
          </Stack>
          <Stack className="team-icon-container">
            <BsWhatsapp className="team-icon" />
          </Stack>
        </Box>
      </Box>
    );
  });
  return (
    <Box className="team" component="section">
      {teams}
    </Box>
  );
};

export default Team;
