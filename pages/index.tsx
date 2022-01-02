import {
  Container,
  Heading,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import type { GetServerSideProps, NextPage } from 'next';
import { MainHero } from '~/components/hero/banner';
import { PackageHero } from '~/components/hero/package';
import ReviewHero from '~/components/hero/review';
import { Box } from '@chakra-ui/react';
import { getBlogs } from '~/lib/api/blogs';
import { Faq, FragmentBlogs, Reviews } from '~/types/base';
import { CardBlog } from '~/components/card/card-blog';
import { getFaq, getReviews } from '~/lib/api/commons';

interface HomeProps {
  blogs: FragmentBlogs[];
  reviews: Reviews[];
  faq: Faq[];
}

const Home: NextPage<HomeProps> = ({ blogs, reviews, faq }: HomeProps) => {
  return (
    <>
      <Container maxW="container.xl">
        <MainHero />
        <PackageHero />
        <Box py={{ base: '2rem', md: '4rem' }}>
          <Heading fontSize={{ base: '2em', md: '3em' }} textAlign="center" color="yellow.500">
            Every Special Moment
          </Heading>
          <SimpleGrid gap={4} columns={[1, 2, 3, 4]} mt={16}>
            {blogs && blogs.map((blog) => <CardBlog key={blog.id} blogs={blog} />)}
          </SimpleGrid>
        </Box>
        <Box py={{ base: '2rem', md: '4rem' }}>
          <Heading fontSize={{ base: '2em', md: '3em' }} textAlign="center" color="yellow.500">
            What They Say About Us?
          </Heading>
          <ReviewHero reviews={reviews} />
        </Box>
        <Box py={{ base: '2rem', md: '4rem' }}>
          <Heading fontSize={{ base: '2em', md: '3em' }} textAlign="center" color="yellow.500">
            FAQ
          </Heading>
          <Accordion mt={8}>
            {faq &&
              faq.map((item) => (
                <AccordionItem key={item.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {item.attributes.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.attributes.description}</AccordionPanel>
                </AccordionItem>
              ))}
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await getBlogs();
  const reviews = await getReviews();
  const faq = await getFaq();
  return {
    props: {
      blogs,
      reviews,
      faq,
    },
  };
};

export default Home;
