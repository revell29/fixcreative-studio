import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const FooterHero: React.FC = () => {
  return (
    <Box bg="primary.accent7" w="full" h="full" px="12rem" color="white" pt="15px" pb="10px" fontFamily="Open Sans">
      <Flex>
        <Flex direction="column">
          <Text fontWeight="semibold">Link</Text>
          <Text fontSize="sm">Home</Text>
          <Text fontSize="sm">Blog</Text>
        </Flex>
        <Flex direction="column" mx="40px">
          <Text fontWeight="semibold">Social Media</Text>
          <Text fontSize="sm">Instagram</Text>
        </Flex>
        <Flex direction="column" mx="20px">
          <Text fontWeight="semibold">Address</Text>
          <Text fontSize="sm">whatsapp</Text>
          <Text fontSize="sm">telepon</Text>
          <Text fontSize="sm">fixcreative@gmail.com</Text>
        </Flex>
      </Flex>
      <Text textAlign="center" mt="2em" fontSize="14px">
        Powered by <b>Fixcreative</b>.
      </Text>
    </Box>
  );
};
