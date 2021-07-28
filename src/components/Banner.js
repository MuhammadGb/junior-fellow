import * as React from 'react';
import banner from '../assets/banner.jpeg';
import { Box, Image, Text } from '@chakra-ui/react';
import '../assets/fonts.css';

export default function Banner() {
  return (
    <Box>
      <Box 
        sx={{
            border: "2px solid red",
            height: "680px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
            }}
        >
        <Text 
          sx={{
              width: "26%",
              position: "relative",
              zIndex: 1,
              left: 80,
              top: 40,
              fontSize: "76px",
              letterSpacing: "-3px", 
              fontWeight: 600,
              fontFamily: "Dm Sans",
              border: "2px solid blue",
              color: "#FFFFFF"
              }}
        >Watch something incredible.</Text>
      </Box>
      <Box>
        <Image 
          src={banner} 
          alt="banner"
          sx={{
              width: "100%",
              top: "140px",
              height: "700px",
              position: "absolute",
              zIndex: -1,
              }}
          />
      </Box>
    </Box>
  );
}
