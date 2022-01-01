import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { MainHero } from '~/components/hero/banner';
import { PackageHero } from '~/components/hero/package';
import ReviewHero from '~/components/hero/review';
import { Box } from '@chakra-ui/react';
import { getBlogs } from '~/lib/api/blogs';
import { FragmentBlogs, Reviews } from '~/types/base';
import { CardBlog } from '~/components/card/card-blog';
import { getReviews } from '~/lib/api/commons';

interface HomeProps {
  blogs: FragmentBlogs[];
  reviews: Reviews[];
}

const Home: NextPage<HomeProps> = ({ blogs, reviews }: HomeProps) => {
  return (
    <>
      <Container maxW="container.xl">
        <MainHero />
        <PackageHero />
        <Box py={{ base: '2rem', md: '5rem' }}>
          <Heading fontSize="4em">Every Special Moment</Heading>
          <SimpleGrid gap={4} columns={[2, 2, 4]} mt={8}>
            {blogs && blogs.map((blog) => <CardBlog key={blog.id} blogs={blog} />)}
          </SimpleGrid>
        </Box>
        <Box py={20}>
          <Heading fontSize="4em" textAlign="center">
            What they say about us
          </Heading>
          <ReviewHero reviews={reviews} />
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await getBlogs();
  const reviews = await getReviews();
  console.log(reviews);
  return {
    props: {
      blogs,
      reviews,
    },
  };
};

export default Home;
