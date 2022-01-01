import React from 'react';
import { Box, HStack, Text, Heading, Stack, Button } from '@chakra-ui/react';

export const PackageHero: React.FC = () => {
  return (
    <HStack py={{ base: 2, md: 8 }} w="full" spacing={8} flexDir={{ base: 'column', md: 'row' }}>
      <Box
        h="full"
        bgImage="linear-gradient(180deg,rgba(68,68,68,0.85) 0%,rgba(68,68,68,0.85) 100%),url(https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/wedding-photographer-06.jpg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="50%"
        position="relative"
        paddingY={['2rem', '5rem', '5rem', '20rem']}
        paddingX={['2rem', '5rem', '5rem', '5rem']}
        w="full"
      >
        <Box position="relative" color="rgba(221,204,176,0.2)!important" textAlign="left">
          <Text fontSize={{ base: '4em', md: '6vw' }} lineHeight="1em" pb={0} fontFamily="'Petit Formal Script'">
            Pricing
          </Text>
        </Box>
        <Box position="relative" mt={{ base: '1.2rem', md: '-2.2rem' }}>
          <Text
            fontSize={{ base: '2em', md: '4vw' }}
            letterSpacing="2px"
            lineHeight="1.1em"
            color="white"
            fontFamily="Atic Didone"
          >
            The Full Wedding Experience
          </Text>
        </Box>
        <Button
          as="a"
          href="https://wa.link/qf5ff5"
          target="_blank"
          mt={10}
          variant="link"
          _hover={{ cursor: 'pointer', color: 'yellow.100' }}
          color="white"
          textTransform="uppercase"
          fontSize="20px"
          borderBottom="2px"
          pb={2}
          borderRadius="0px"
        >
          Pricing Packages
        </Button>
      </Box>
      <Box
        h="full"
        position="relative"
        paddingY={['2rem', '5rem', '2rem', 40]}
        paddingX={['2rem', '2rem', '2rem', '5rem']}
        w="full"
      >
        <Stack textAlign={{ base: 'left', md: 'center' }} spacing={4}>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Photography
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Videography
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Video clip
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Company profile
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Wedding
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Prewedding
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Photo studio
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Event
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Photo Product
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Video Product
          </Heading>
          <Heading as="h2" fontSize={{ base: '4vw', md: '2vw', lg: '2vw' }} lineHeight="1.5">
            Iklan
          </Heading>
        </Stack>
      </Box>
    </HStack>
  );
};
