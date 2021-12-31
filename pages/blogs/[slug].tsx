import { Container, Heading, Text, Image, Stack } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { getBlogsBySlug } from '~/lib/api/blogs';
import { API_URL } from '~/lib/config';
import { FragmentBlogs } from '~/types/base';

interface BlogsProps {
  blogs: FragmentBlogs[];
}

const Blogs: NextPage<BlogsProps> = ({ blogs }: BlogsProps) => {
  const THUMB_URL = `${API_URL}${blogs[0].attributes.thumbnail.data.attributes.url}`;

  return (
    <Container maxW="container.xl">
      <Heading textTransform="capitalize" color="gray.600">
        {blogs[0].attributes.name}
      </Heading>
      <Text mt={2}>{blogs[0].attributes.date}</Text>
      <Stack mt={4}>
        <Image
          src={THUMB_URL}
          alt={blogs[0].attributes.name}
          objectFit="cover"
          h={{ base: '30vh', md: '40vh', lg: '50vh' }}
          rounded="md"
          w="full"
        />
      </Stack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  const blogs = await getBlogsBySlug(slug as string);
  return {
    props: {
      blogs,
    },
  };
};

export default Blogs;
