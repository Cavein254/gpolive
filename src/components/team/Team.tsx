import { Box, Stack, Typography } from '@mui/material';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import './styles.css';

const Team = () => {
  return (
    <Box className="team" component="section">
      <Box className="team-container">
        <Box className="team-details">
          <Box className="team-img-container">
            <img
              src="https://images.unsplash.com/photo-1596365481115-79cb80ea517b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=250&q=60"
              alt="user"
              className="team-image"
            />
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
              Allan Mango
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
              Marketer
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
    </Box>
  );
};

export default Team;
