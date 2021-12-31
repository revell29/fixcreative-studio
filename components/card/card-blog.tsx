import * as React from 'react';
import { Heading, Image, Text, LinkBox, Stack } from '@chakra-ui/react';
import { FragmentBlogs } from '~/types/base';
import { API_URL } from '~/lib/config';
import Link from 'next/link';

interface Props {
  blogs: FragmentBlogs;
}

export const CardBlog: React.FC<Props> = ({ blogs }: Props) => {
  const THUMB_URL = `${API_URL}${blogs.attributes.thumbnail.data.attributes.url}`;
  return (
    <Link href={`/blogs/${blogs.attributes.slug}`} passHref>
      <LinkBox
        _hover={{
          cursor: 'pointer',
          scale: 1.05,
          border: '1px',
          borderColor: 'yellow.500',
        }}
        bgColor="whiteAlpha.50"
        borderRadius="sm"
        boxShadow="shadow-soft"
        d="inline-block"
        overflow="hidden"
        pos="relative"
        role="group"
        transform="auto-gpu"
        transitionDuration="fast"
        transitionProperty="common"
        transitionTimingFunction="ease-out"
        rounded="md"
      >
        {' '}
        <Image src={THUMB_URL} alt={blogs.attributes.name} objectFit="cover" roundedTop="md" />
        <Stack p={4}>
          <Heading fontSize="16px" color="yellow.500">
            {blogs.attributes.name}
          </Heading>
          <Text fontSize="14px">{blogs.attributes.date}</Text>
        </Stack>
      </LinkBox>
    </Link>
  );
};
