import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { CardBlog } from '~/components/card/card-blog';
import { getBlogsByCategory } from '~/lib/api/blogs';
import { FragmentBlogs } from '~/types/base';
import { NextSeo } from 'next-seo';

interface BlogsByCategoryProps {
  blogs: FragmentBlogs[];
}

const Category: NextPage<BlogsByCategoryProps> = ({ blogs }: BlogsByCategoryProps) => {
  const { query } = useRouter();

  return (
    <>
      <NextSeo
        title={`${query.name as string} - Fix Creative Studio`}
        description={`Gallery ${query.name as string}`}
      />
      <Container maxW="container.xl" pb={20}>
        <Heading textTransform="capitalize" color="gray.600">
          {query.name}
        </Heading>
        {blogs.length === 0 && <Text py={10}>Data Kosong</Text>}
        {blogs.length > 0 && (
          <SimpleGrid py="3rem" gap={4} columns={[1, 2, 3, 4]}>
            {blogs && blogs.map((blog) => <CardBlog key={blog.id} blogs={blog} />)}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { name } = ctx.query;
  const blogs = await getBlogsByCategory(name as string);
  return {
    props: {
      blogs,
    },
  };
};

export default Category;
