import * as React from 'react';
import banner from '../assets/banner.jpeg';
import { Box, Image, Text } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Box boxSize="lg">
      <Image src={banner} alt="banner" />
      <Text fontSize="3xl">Watch something incredible.</Text>
    </Box>
  );
}
