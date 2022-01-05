import * as React from 'react';
import { Box, Text, Image, Flex, Stack, HStack, Link as ChakraLink, Container, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { Vendor } from '~/types/base';
import { getVendors } from '~/lib/api/commons';
import { API_URL } from '~/lib/config';

export const Footer: React.FC = () => {
  const [vendor, setVendors] = React.useState<Vendor[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getVendors();
      setVendors(response);
    };
    fetchData();
  }, []);

  return (
    <Box py={20} px={[5, 5, 10]} bg="primary.accent7">
      <Container maxW="container.xl">
        <Flex gap={[2, 10, 20]} flexDir={['column', 'column', 'row']}>
          <Stack w="full">
            <Text color="white" fontWeight="semibold">
              Contact Us
            </Text>
            <ChakraLink href="https://www.instagram.com/fixcreativephotography/" isExternal color="white">
              <HStack>
                <Image src="/assets/sosmed/instagram.svg" alt="instagram" w="24px" />
                <Text color="white" fontSize="13px">
                  Fixcreative
                </Text>
              </HStack>
            </ChakraLink>
            <ChakraLink href="https://wa.link/766dn8" isExternal color="white">
              <HStack>
                <Image src="/assets/sosmed/whatsapp.svg" alt="instagram" w="24px" />
                <Text color="white" fontSize="13px">
                  0813 1594 1338
                </Text>
              </HStack>
            </ChakraLink>
          </Stack>
          <Stack w="full">
            <Link href="/category/Photo%20Studio" passHref>
              <Text as="a" color="white" fontWeight="semibold">
                Studio
              </Text>
            </Link>
            <Link href="/category/Wedding" passHref>
              <Text as="a" color="white" fontWeight="semibold">
                Wedding
              </Text>
            </Link>
            <Link href="/term-condition" passHref>
              <Text as="a" color="white" fontWeight="semibold">
                Syarat & Ketentuan
              </Text>
            </Link>
          </Stack>
          <Stack w="full">
            <Text color="white" fontWeight="semibold">
              Vendor
            </Text>
            <SimpleGrid gap={2} columns={[3]}>
              {vendor &&
                vendor.map((vn) => (
                  <Image
                    src={`${API_URL}${vn.attributes.logo.data.attributes.url}`}
                    alt={vn.attributes.vendor_name}
                    w="90px"
                    key={vn.id}
                  />
                ))}
            </SimpleGrid>
          </Stack>
          <Stack w="full">
            <Text color="white" fontWeight="semibold">
              Address
            </Text>
            <Text color="white">
              Jl. Wibawa Mukti II No.RT06/04, Jatisari, Kec. Jatiasih, Kota Bks, Jawa Barat 17426
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
