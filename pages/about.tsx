import { Container, Text, Heading } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { getAboutUs } from '~/lib/api/commons';
import { AboutUs } from '~/types/base';

interface AboutUsProps {
  data: AboutUs;
}

const Home: NextPage<AboutUsProps> = ({ data }: AboutUsProps) => {
  return (
    <Container maxW="container.lg">
      <Heading textTransform="capitalize">Tentang Kami</Heading>{' '}
      <Text mt={4} whiteSpace="pre-line">
        {data.attributes.description}
      </Text>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getAboutUs();

  return {
    props: {
      data,
    },
  };
};

export default Home;
