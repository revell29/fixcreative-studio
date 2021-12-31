import * as React from 'react';
import { Center, Flex, Text } from '@chakra-ui/react';

function ReviewHero() {
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
      mb={-10}
    >
      <Center w="40rem" h="35rem" bg="primary.accent2">
        <Center bg="white" w="90%" rounded="2xl" h="20rem" flexDir="column">
          <Text fontSize="lg" mb="10">
            &quot; Lorem Ipsum is simply dummy text of the printing and typesetting industry. &quot;
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            jhon doe
          </Text>
        </Center>
      </Center>
    </Flex>
  );
}

export default ReviewHero;
