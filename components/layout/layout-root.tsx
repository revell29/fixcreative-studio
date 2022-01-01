import * as React from 'react';
import { Flex, Box } from '@chakra-ui/react';
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
    </Flex>
  );
};
