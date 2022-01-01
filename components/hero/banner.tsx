import { Flex, Box, Heading, Image } from '@chakra-ui/react';
import * as React from 'react';
import { API_URL } from '~/lib/config';

export const MainHero: React.FC = () => {
  return (
    <Flex h="full" w="full" left={0} right={0} bottom={0} zIndex={0} color="white" py={20}>
      <Box position="relative" w="full" zIndex={1} pt="10vw" color="white">
        <Heading fontSize={['2rem', '3.125rem', '3.125rem', '5rem']} mb={24} fontWeight="normal">
          CAPTURING EVERY MOMENT ON YOUR BIG DAY
        </Heading>
      </Box>
      <Image
        alt=""
        display={{ base: 'none', md: 'block' }}
        src={`${API_URL}/uploads/DSC_2395_c49c80abd9.JPG?updated_at=2021-12-31T15:50:18.861Z`}
        h="full"
        boxSize="40%"
        objectFit="cover"
        marginTop={'-2rem'}
        postion="absolute"
      />
    </Flex>
  );
};
