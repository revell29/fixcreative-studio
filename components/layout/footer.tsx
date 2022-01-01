import * as React from 'react';
import { Box, Flex, Text, Image, Stack, HStack, Link } from '@chakra-ui/react';

export const Footer: React.FC = () => {
  return (
    <Box bg="primary.accent7" w="full" h="full" px={{ base: '20px', lg: '12rem' }}>
      <Stack py={{ base: '10', lg: '20' }} direction={['column', 'row']} spacing={{ base: '2', sm: '5', lg: '10' }}>
        <Flex direction="column" justifyContent="left">
          <Text color="white" fontSize="14px" fontWeight="semibold">
            Links
          </Text>
          <Link color="white" fontSize="13px" href="/" py="1">
            Home
          </Link>
          <Link color="white" fontSize="13px" href="/category/studio">
            Studio
          </Link>
        </Flex>
        <Flex direction="column" mx="40px">
          <Text fontWeight="semibold" color="white" fontSize="14px">
            Social Media
          </Text>
          <Link href="https://www.instagram.com/fixcreativephotography/" isExternal color="white">
            <HStack>
              <Image src="/assets/sosmed/instagram.svg" alt="instagram" w="24px" />
              <Text color="white" fontSize="13px">
                Fixcreative
              </Text>
            </HStack>
          </Link>
        </Flex>
        <Flex direction="column" mx="20px">
          <Text fontWeight="semibold" color="white" fontSize="14px">
            Address
          </Text>
          <HStack>
            <Image src="/assets/sosmed/whatsapp.svg" alt="" />
            <Text fontSize="13px" color="white">
              0813 1594 1338
            </Text>
          </HStack>
        </Flex>
      </Stack>
      <Text textAlign="center" fontSize="14px" color="white" pb="10px">
        &copy;{new Date().getFullYear()}. Powered by <b>Fixcreative</b>.
      </Text>
    </Box>
  );
};
