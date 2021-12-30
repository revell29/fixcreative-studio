import * as React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Navbar } from './navbar';

export const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Navbar />
      <Box>{children}</Box>
    </Flex>
  );
};
