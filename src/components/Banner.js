import * as React from 'react';
import banner from '../assets/banner.jpeg';
import { Box, Image, Text, Input } from '@chakra-ui/react';

export default function Banner({value, handleChange}) {

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
          alignItems: "center",
          '@media only screen and (max-width: 1024px)': {
            justifyContent: "center"
          }
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
            color: "#FFFFFF",
            '@media only screen and (max-width: 1024px)': {
              left: -130,
              top: 10,
              textAlign: "center",
              fontSize: "72px",
              letterSpacing: "-5%",
              lineHeight: "94px",
            }
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
            '@media only screen and (max-width: 1024px)': {
              width: "834px",
              height: "500px",
              top: "135px",
            }
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
            '@media only screen and (max-width: 1024px)': {
              width: "680px",
            }
          }}
        />
      </Box>
    </Box>
  );
}
