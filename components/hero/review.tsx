import * as React from 'react';
import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Reviews } from '~/types/base';

interface ReviewProps {
  reviews: Reviews[];
}

const ReviewHero: React.FC<ReviewProps> = ({ reviews }: ReviewProps) => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 5,
    useCSS: true,
    className: 'slider',
    nextArrow: (
      <Box
        h="40px"
        w="40px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        display="block"
        rounded="full"
        mr="4rem"
      />
    ),
    prevArrow: (
      <Box
        h="40px"
        w="40px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        display="block"
        rounded="full"
        ml="2.5rem"
        zIndex={1}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box mt={7}>
      <Slider {...settings}>
        {reviews &&
          reviews.map((review) => (
            <Box key={review.id}>
              <Box border="1px" borderColor="gray.300" p={4} m={2} rounded="md" minH="220px" position="relative" mr={4}>
                <Text fontSize="14px" fontStyle="italic" noOfLines={4}>
                  “{review.attributes.review}”
                </Text>
                <Box mt={4} position="absolute" bottom={3}>
                  <HStack>
                    <Avatar name={review.attributes.customer_name} size="sm" />
                    <Text fontSize="14px" fontWeight="600">
                      {review.attributes.customer_name}
                    </Text>
                  </HStack>
                </Box>
              </Box>
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default ReviewHero;
