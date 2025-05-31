import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Stack,
  Avatar,
  Typography,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Monitor as MonitorIcon,
  MiscellaneousServices as MiscellaneousServicesIcon,
  SupportAgent as SupportAgentIcon,
  Contacts as ContactsIcon,
  AccountTree as AccountTreeIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";
import HomeAppBar from "./HomeAppBar";

const sections = [
  {
    path: "/",
    label: "Home",
    icon: <HomeIcon sx={{ fontSize: "30px" }} />,
    color: "#2ad1be",
  },
  {
    path: "/about",
    label: "About",
    icon: <MonitorIcon sx={{ fontSize: "30px" }} />,
    color: "#ffeb3b",
  },
  {
    path: "/ittech",
    label: "Group of Company",
    icon: <AccountTreeIcon sx={{ fontSize: "30px" }} />,
    color: "#b71c1c",
    children: [
      {
        path: "/ittech/company1",
        label: "Company One",
        icon: <BusinessIcon sx={{ fontSize: "24px" }} />,
        color: "#e53935",
      },
      {
        path: "/ittech/company2",
        label: "Company Two",
        icon: <BusinessIcon sx={{ fontSize: "24px" }} />,
        color: "#d32f2f",
      },
    ],
  },
  {
    path: "/telecommunication",
    label: "Blog",
    icon: <MiscellaneousServicesIcon sx={{ fontSize: "30px" }} />,
    color: "#4caf50",
  },
  {
    path: "/career",
    label: "Career",
    icon: <SupportAgentIcon sx={{ fontSize: "30px" }} />,
    color: "#03a9f4",
  },
  {
    path: "/contact",
    label: "Contact",
    icon: <ContactsIcon sx={{ fontSize: "30px" }} />,
    color: "#cddc39",
  },
];

const slideDown = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PublicAppBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const appBarBackgroundColor = pathname === "/" ? "transparent" : "#fff";
  const appBarPosition = pathname === "/" ? "fixed" : "absolute";

  return (
    <>
      <AppBar
        elevation={0}
        position={appBarPosition}
        sx={{ background: "none", top: "-8px" }}
      >
        <Toolbar sx={{ pl: "0px !important" }}>
          <Grid container alignItems="center" sx={{ width: "100%" }}>
            <Grid
              item
              xs={2}
              sx={{
                backgroundColor: appBarBackgroundColor,
                borderRadius: "0 0 50px 0",
              }}
            >
              <HomeAppBar />
            </Grid>

            <Grid item xs={8}>
              {isLargeScreen && (
                <Stack
                  sx={{ mt: 2, position: "relative" }}
                  direction="row"
                  gap={theme.spacing(7)}
                  justifyContent="center"
                >
                  {sections.map(
                    ({ path, label, icon, color, children }, index) => (
                      <Box
                        key={path}
                        onMouseEnter={() => setHoveredMenu(index)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        sx={{ position: "relative" }}
                      >
                        <Stack direction="column" alignItems="center">
                          <Avatar
                            sx={{
                              mb: 1,
                              p: 0.5,
                              backgroundColor: color,
                              boxShadow:
                                pathname === path
                                  ? "-1px 1px 15px 1px #fff"
                                  : "0px",
                              animation: `${slideDown} 0.8s ease-in-out`,
                              cursor: "pointer",
                            }}
                            variant="rounded"
                            component={Link}
                            to={path}
                          >
                            {icon}
                          </Avatar>
                          <Typography
                            variant="body2"
                            sx={{
                              textAlign: "center",
                              color: pathname === "/" ? "#000" : "#fff",
                              whiteSpace: "pre-line",
                              animation: `${slideDown} 0.5s ease-in-out`,
                            }}
                          >
                            {label}
                          </Typography>
                        </Stack>

                        {/* Hover Dropdown for children */}
                        {Array.isArray(children) &&
                          hoveredMenu === index && (
                            <Paper
                              elevation={3}
                              sx={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                mt: 1,
                                px: 2,
                                py: 1,
                                zIndex: 10,
                                minWidth: "180px",
                                backgroundColor: "#fff",
                              }}
                            >
                              <Stack spacing={1}>
                                {children.map(
                                  ({ path: childPath, label: childLabel, icon: childIcon, color: childColor }) => (
                                    <Stack
                                      key={childPath}
                                      direction="row"
                                      spacing={1}
                                      alignItems="center"
                                      component={Link}
                                      to={childPath}
                                      sx={{
                                        textDecoration: "none",
                                        color: "black",
                                        
                                        px: 1,
                                        py: 0.5,
                                        borderRadius: 1,
                                        "&:hover": {
                                          backgroundColor: "red",
                                        },
                                      }}
                                    >
                                      <Avatar
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          backgroundColor: childColor,
                                        }}
                                      >
                                        {childIcon}
                                      </Avatar>
                                      <Typography variant="body2">
                                        {childLabel}
                                      </Typography>
                                    </Stack>
                                  )
                                )}
                              </Stack>
                            </Paper>
                          )}
                      </Box>
                    )
                  )}
                </Stack>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PublicAppBar;
