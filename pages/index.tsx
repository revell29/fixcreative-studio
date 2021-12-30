import type { NextPage } from 'next';
import { LayoutRoot } from '~/components/layout/layout-root';
import { Text } from '@chakra-ui/react';
import { MainHero } from '~/components/hero/banner';

const Home: NextPage = () => {
  return (
    <LayoutRoot>
      <MainHero />
    </LayoutRoot>
  );
};

export default Home;
