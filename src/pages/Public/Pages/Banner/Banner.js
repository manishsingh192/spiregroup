import { Box, Typography } from '@mui/material'
import React from 'react'
import video from '../../../../assets/Video/banner.mp4'

const Banner = () => {
  return (
    <Box position="relative" height="400px" overflow="hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Box
        position="relative"
        zIndex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h2" color="white">
          Automobile
        </Typography>
      </Box>
    </Box>
  )
}

export default Banner
