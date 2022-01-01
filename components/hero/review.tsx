import * as React from 'react';
import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Reviews } from '~/types/base';

interface ReviewProps {
  reviews: Reviews[];
}

const ReviewHero: React.FC<ReviewProps> = ({ reviews }: ReviewProps) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      arrows={false}
      autoPlay={true}
      showDots={true}
      infinite={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
    >
      {reviews &&
        reviews.map((review) => (
          <Box border="1px" borderColor="gray.300" p={4} key={review.id} m={2} rounded="md" maxH="300px">
            <Text fontSize="14px" fontStyle="italic" noOfLines={4}>
              “{review.attributes.review}”
            </Text>
            <Box mt={4}>
              <HStack>
                <Avatar name={review.attributes.customer_name} />
                <Text fontSize="14px" fontWeight="600">
                  {review.attributes.customer_name}
                </Text>
              </HStack>
            </Box>
          </Box>
        ))}
    </Carousel>
  );
};

export default ReviewHero;
