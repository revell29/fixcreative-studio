import { Container, Heading, Text, Image, Stack, Box } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { getBlogsBySlug } from '~/lib/api/blogs';
import { API_URL } from '~/lib/config';
import { FragmentBlogs } from '~/types/base';
import { NextSeo } from 'next-seo';

interface BlogsProps {
  blogs: FragmentBlogs[];
}

const Blogs: NextPage<BlogsProps> = ({ blogs }: BlogsProps) => {
  const THUMB_URL = `${API_URL}${blogs[0].attributes.thumbnail.data.attributes.url}`;

  return (
    <>
      <NextSeo
        title={`${blogs[0].attributes.name} - Fix Creative Studio`}
        description={`${blogs[0].attributes.description}`}
      />
      <Container maxW="container.xl" pb={20}>
        <Heading textTransform="capitalize" color="gray.600">
          {blogs[0].attributes.name}
        </Heading>
        <Text mt={1}>{blogs[0].attributes.date}</Text>
        <Stack mt={4} spacing={2}>
          <Image
            src={THUMB_URL}
            alt={blogs[0].attributes.name}
            objectFit="cover"
            h={{ base: '30vh', md: '40vh', lg: '50vh' }}
            borderRadius="xl"
            w="full"
          />
          <Box w="100%" mx="auto" sx={{ columnCount: [2, 2, 2, 4], columnGap: 2 }}>
            {blogs[0].attributes.images.data.map((image: any, index: number) => (
              <Image
                _hover={{ border: '4px', borderColor: 'yellow.500', cursor: 'pointer' }}
                key={index}
                src={`${API_URL}${image.attributes.url}`}
                w="100%"
                borderRadius="xl"
                mb={2}
                d="inline-block"
                alt="Alt"
              />
            ))}
          </Box>
        </Stack>
      </Container>
    </>
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
