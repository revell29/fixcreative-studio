import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { CardBlog } from '~/components/card/card-blog';
import { getBlogsByCategory } from '~/lib/api/blogs';
import { FragmentBlogs } from '~/types/base';

interface BlogsByCategoryProps {
  blogs: FragmentBlogs[];
}

const Category: NextPage<BlogsByCategoryProps> = ({ blogs }: BlogsByCategoryProps) => {
  const { query } = useRouter();

  return (
    <Container maxW="container.xl">
      <Heading textTransform="capitalize" color="gray.600">
        {query.name}
      </Heading>
      <SimpleGrid py="3rem" gap={4} columns={[2, 3, 4]}>
        {blogs && blogs.map((blog) => <CardBlog key={blog.id} blogs={blog} />)}
      </SimpleGrid>
    </Container>
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