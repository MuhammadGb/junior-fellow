import * as React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box 
        bg="#292929" 
        w="100%" 
        color="#FFFFFF" 
        sx={{
            zIndex: 1,
            position: "absolute",
            height: "140px",
            alignItems: "center",
            '@media only screen and (max-width: 1024px)': {
              justifyContent: "center",
              width: "834px",
            }
          }}
        >
      <Heading 
        fontSize="35px" 
        sx={{
            position: "absolute",
            left: "77px",
            zIndex: 100,
            top: "10px",
            padding: "11px 19px",
            border: "1px solid #FFFFFF",
            fontFamily: "Merriweather", 
            letterSpacing: -2,
            fontWeight: 300,
            '@media only screen and (max-width: 1024px)': {
              left: "321px",
            }
          }}
        >
        MyTestApp
      </Heading>
    </Box>
  );
}
