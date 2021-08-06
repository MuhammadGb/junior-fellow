import * as React from 'react';
import banner from '../assets/banner.jpeg';
import { Box, Image, Text, Input } from '@chakra-ui/react';

export default function Banner({test, value, handleChange}) {

  console.log(test)

  return (
    <Box 
      sx={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <Box 
        sx={{
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
            top: "-30px",
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
          padding: "67px 57px 48px 77px",
          }}
      >
      <Text 
        sx={{
          fontSize: "24",
          fontFamily: "Dm Sans",
          color: "#000000",
          margin: "0em",
          }}
        >Search</Text>
        <Input 
          value={value}
          type="text"
          onChange={handleChange}
          placeholder="" 
          sx={{
            width: "100%",
            height: "50px",
            margin: "0px",
            color: "black",
            backgroundColor: "#FFFFFF",
            border: "1px solid #000000",
            }}
        />
      </Box>
    </Box>
  );
}
