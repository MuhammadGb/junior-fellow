import * as React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box bg="black" w="90%" p={2} color="white">
      <Heading size="lg" fontSize="30px">
        MyTestApp
      </Heading>
    </Box>
  );
}
