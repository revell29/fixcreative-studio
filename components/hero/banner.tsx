import { Box, Heading, Button, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

export const MainHero: React.FC = () => {
  return (
    <Box h="full" w="full" left={0} right={0} bottom={0} zIndex={0} overflowY="hidden" color="white" p={10} mb="8px">
      <Box position="absolute" top={0} left={0} bottom={0} right={0} h="706.984px" zIndex={0}>
        <Image
          alt=""
          src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/wedding-photographer-58.jpg"
          h="full"
          w="full"
          objectFit="cover"
          postion="absolute"
        />
        <Box bg="white" w="full" h="full" position="absolute" top={0} opacity="0.1" />
      </Box>
      <Box position="relative" w="full" maxW="100vw" zIndex={1} mx="auto" pt="10vw" color="white">
        <Heading fontSize={['3.125rem', '3.125rem', '4rem']} maxW="600px" m="auto">
          Unlimited movies, TV shows, and more.
        </Heading>
        <Link href="/register" passHref>
          <Button as="a" variant="primary" size="lg" mt={10}>
            Register Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
