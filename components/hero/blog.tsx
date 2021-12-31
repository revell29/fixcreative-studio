import * as React from 'react';
import { Box, SimpleGrid, Image, Text, Button, Flex, HStack } from '@chakra-ui/react';

export const BlogHero: React.FC = () => {
  return (
    <Box
      h="full"
      w="full"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
      overflowY="hidden"
      py="2rem"
      justifyContent="center"
    >
      <Text
        textAlign="center"
        mb={{ base: '2rem', lg: '2rem' }}
        fontSize="xl"
        fontFamily="Open Sans"
        fontWeight="semibold"
      >
        BLOG POST
      </Text>
      <HStack spacing={10} justify="center" mb={{ sm: '-1rem', lg: '1.5rem' }}>
        <Box w="208px" h="291px" rounded="sm">
          <Image
            src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/wedding-photographer-59.jpg"
            alt=""
          />
        </Box>
        <Box w="208px" h="291px" rounded="sm">
          <Image
            src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/wedding-photographer-59.jpg"
            alt=""
          />
        </Box>
        <Box w="208px" h="291px" rounded="sm">
          <Image
            src="https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2020/05/wedding-photographer-59.jpg"
            alt=""
          />
        </Box>
      </HStack>
      <Flex justifyContent="center">
        <Button
          as="a"
          variant="outline"
          size="sm"
          fontFamily="Open Sans"
          borderColor="black"
          _hover={{ bg: 'white', cursor: 'pointer' }}
        >
          View More Portfolio
        </Button>
      </Flex>
    </Box>
  );
};
