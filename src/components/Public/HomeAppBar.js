import React, { useEffect, useState } from 'react';
import { Box, Stack, Divider, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTheme } from '@mui/material/styles';
import Logo from '../../assets/images/spirale_logo.png';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const HomeAppBar = () => {
    const theme = useTheme();
    // const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const [showElements, setShowElements] = useState(false);
    const [open, setOpen] = useState(false); // State to control drawer open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu icon click

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowElements(true); // Display elements after a delay for animation
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleDrawerOpen = () => {
        setOpen(true); // Open the drawer
        setIsMenuOpen(true); // Update menu icon state
    };

    const handleDrawerClose = () => {
        setOpen(false); // Close the drawer
        setIsMenuOpen(false); // Update menu icon state
    };

    const handleIconClick = () => {
        if (isMenuOpen) {
            handleDrawerClose(); // Close drawer if menu is open
        } else {
            handleDrawerOpen(); // Open drawer if menu is closed
        }
    };

    // Define your routes here
    const routes = [
        { text: 'About', path: '/about', icon: <InfoIcon /> },
        { text: 'Career', path: '/career', icon: <WorkIcon /> },
        { text: 'Contact', path: '/contact', icon: < ContactPageIcon /> },
        { text: 'Contact', path: '/contact', icon: < ContactPageIcon /> },
    ];

    return (
        <>

            <Box
                sx={{
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
                    width: 230,
                    height: 80,
                    borderBottomRightRadius: '45px',
                    opacity: showElements ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                }}
            >
                <Stack direction="row" alignItems="center">
                    <img
                        src={Logo}
                        alt="Logo"
                        height="52px"
                        width="80px"
                        style={{
                            padding: '0px 20px',
                            objectFit: 'cover',
                            cursor: 'pointer',
                        }}
                        onClick={() => window.location.href = '/'}
                    />

                    <Divider orientation="vertical" flexItem sx={{ height: 80 }} />
                    <Stack direction="column" alignItems="center" sx={{ pl: 4 }}>
                        <IconButton
                            onClick={handleIconClick}
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease-in-out',
                                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                            }}
                        >
                            {isMenuOpen ? (
                                <CloseRoundedIcon fontSize="large" />
                            ) : (
                                <MenuRoundedIcon fontSize="large" />
                            )}
                        </IconButton>
                        {isMenuOpen ? (
                            <Typography variant="body1" color={'#000'}>Close</Typography>
                        ) : (
                            <Typography variant="body1" color={'#000'}>Menu</Typography>
                        )}
                    </Stack>
                </Stack>
            </Box>

            {/* Drawer Component */}
            <Drawer
                anchor="left"
                open={open} // Controlled by open state
                onClose={handleDrawerClose} // Close handler
                ModalProps={{
                    keepMounted: true, // Better performance on mobile.
                }}
                sx={{
                    width: 250,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 180,
                        boxSizing: 'border-box',
                        top: 0,
                        color: 'grey',
                        height: '100%',
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                        backgroundColor: theme.palette.background.default, // Match with your theme background
                        opacity: open ? 1 : 0, // Control opacity based on open state
                        transition: theme.transitions.create('opacity', {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.short,
                        }),
                    },
                }}
            >
                <List>
                    {routes.map((route, index) => (
                        <ListItem
                            button
                            key={index}
                            component={Link}
                            to={route.path}
                            onClick={handleDrawerClose} // Close drawer on route click
                            sx={{ gap: '20px' }}
                        >
                            <ListItemIcon sx={{ minWidth: '0px' }}>
                                {route.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={route.text}
                                primaryTypographyProps={{
                                    sx: { fontSize: '0.7rem', color: 'black' }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>

        </>
    );
};

export default HomeAppBar;