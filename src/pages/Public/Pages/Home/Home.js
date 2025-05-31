import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Logo from '../../../../assets/images/new logo.jpeg';
import {
  Box,
  Button,
  Stack,
  Modal,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useTheme } from '@emotion/react';

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  color: '#fff',
  textAlign: 'center',
  paddingTop: theme.spacing(12),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(18),
  },
}));

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false); // State for YouTube popup
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = 'homeexplore';
  };

  return (
    <>
      <Content>
        <Box mt={3}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              width: '100%',
              maxWidth: 350,
              height: 'auto',
              mx: 'auto',
            }}
          />
          {showContent && (
            <Stack
              sx={{ my: 4 }}
              direction={isMobile ? 'column' : 'row'}
              gap={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                size="medium"
                variant="contained"
                sx={{
                  textTransform: 'uppercase',
                  px: 3,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  backgroundColor: '#013967',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#777',
                    color: '#fff',
                  },
                }}
                onClick={handleClick}
              >
                Explore Home <EastIcon sx={{ pl: 1 }} />
              </Button>
            </Stack>
          )}
        </Box>
      </Content>
    </>
  );
};

export default Home;
