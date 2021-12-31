import React from 'react';
import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react';

export const PackageHero: React.FC = () => {
  return (
    <Flex
      left={0}
      right={0}
      bottom={0}
      zIndex={0}
      overflowY="hidden"
      maxW="100%"
      justifyContent="center"
      textAlign="center"
      mb={10}
    >
      <Box w="50rem" border="1px" borderColor="gray.200" p="2px">
        <Box border="1px" borderColor="gray.200" py={16} px={10} justifyContent="center">
          <Stack w="full" direction={['column', 'row']}>
            <Flex direction="column" w="50%">
              <Text fontFamily="Antic Didone" fontSize="2xl">
                ENGAGEMENT
              </Text>
              <Text fontFamily="Open Sans" fontSize="sm" color="primary.accent5" my="3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab
              </Text>
              <Button as="a" variant="link">
                View Gallery
              </Button>
            </Flex>
            <Flex direction="column" w="50%">
              <Text fontFamily="Antic Didone" fontSize="2xl">
                WEDDING
              </Text>
              <Text fontFamily="Open Sans" fontSize="sm" color="primary.accent5" my="3">
                ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab
              </Text>
              <Button as="a" variant="link">
                View Gallery
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};
