import { Container, Text, Heading } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { getTermCondition } from '~/lib/api/commons';
import { TermCondtion } from '~/types/base';
import { NextSeo } from 'next-seo';

interface TermConditionProps {
  data: TermCondtion;
}

const Home: NextPage<TermConditionProps> = ({ data }: TermConditionProps) => {
  return (
    <>
      <NextSeo title="About Us - Fix Creative Studio" description="Tentang Fix Creative Studio" />
      <Container maxW="container.lg" pb={20}>
        <Heading textTransform="capitalize">Tentang Kami</Heading>{' '}
        <Text mt={4} whiteSpace="pre-line">
          {data.attributes.description}
        </Text>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getTermCondition();

  return {
    props: {
      data,
    },
  };
};

export default Home;
