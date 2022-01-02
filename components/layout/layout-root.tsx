import * as React from 'react';
import { Flex, Box, Link, Image } from '@chakra-ui/react';
import { Navbar } from './navbar';
import { getCategory } from '~/lib/api/commons';
import { FragmentCategory } from '~/types/base';
import { Footer } from './footer';

export const LayoutRoot: React.FC = ({ children }) => {
  const [category, setCategory] = React.useState<FragmentCategory[]>([]);

  React.useEffect(() => {
    const fetchCategory = async () => {
      const response = await getCategory();
      setCategory(response);
    };
    fetchCategory();
  }, []);

  return (
    <Flex flexDir="column" minH="100vh">
      <Navbar categoryData={category} />
      <Box flex={1} py={{ base: 5, md: 10 }}>
        {children}
      </Box>
      <Footer />
      <Link href="https://wa.link/fxkt6m" target="_blank">
        <Flex
          bg="green.500"
          position="fixed"
          bottom={{ base: 3, md: 5 }}
          right={{ base: 3, md: 5 }}
          rounded="full"
          h={{ base: '60px', md: '60px' }}
          w={{ base: '60px', md: '60px' }}
          align="center"
          justify="center"
          boxShadow="lg"
        >
          <Image src="/assets/sosmed/whatsapp.svg" alt="whatsapp" w={{ base: '35px', md: '40px' }} display="block" />
        </Flex>
      </Link>
    </Flex>
  );
};
