import * as React from 'react';
import banner from '../assets/banner.jpeg';
import { Box, Image, Text, Input } from '@chakra-ui/react';

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
              zIndex: 0,
              left: 80,
              top: 40,
              fontSize: "76px",
              letterSpacing: "-1px", 
              fontWeight: 600,
              fontFamily: "Dm Sans",
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
              top: "-20px",
              height: "800px",
              position: "absolute",
              zIndex: -1,
              }}
          />
      </Box>
      <Box 
        sx={{
          zIndex: 1,
          background: "#FFFFFF",
          padding: "3em 77px",
          }}
      >
      <Text 
        sx={{
          fontSize: "24",
          fontFamily: "Dm Sans",
          color: "#000000",
          margin: "0em 0em 0em 0em",
          }}
        >Search</Text>
        <Input 
          placeholder="" 
          sx={{
            width: "90%",
            height: "54px",
            margin: "0em 0em 1em 0em",
            color: "#FFFFFF",
            }}
        />
      </Box>
    </Box>
  );
}
