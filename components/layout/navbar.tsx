import * as React from 'react';
import {
  Flex,
  Container,
  Link as ChakraLink,
  Button,
  HStack,
  useMediaQuery,
  Box,
  Image,
  IconButton,
  Fade,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { FragmentCategory } from '~/types/base';

const routeArray = Object.entries(routes as Record<string, string>);

interface NavbarProps {
  categoryData: FragmentCategory[];
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { categoryData } = props;
  const router = useRouter();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = React.useState(false);
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();

  const isRoute = React.useCallback(
    (route: string) => {
      return router.route == route;
    },
    [router.route]
  );

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <Flex
      as="nav"
      alignItems="center"
      height="80px"
      position="sticky"
      insetX={0}
      top={0}
      zIndex={100}
      bg="white"
      borderBottom="1px"
      borderColor="yellow.400"
    >
      <Container maxW="container" px={10}>
        <Flex alignItems="center" flexDir="row" w="full">
          <ChakraLink as={Link} href="/">
            <Image src="/assets/logo-black.png" alt="logo" display="block" w="150px" mr="auto" />
          </ChakraLink>

          {!isMobile && (
            <Flex flex={1}>
              <HStack ml="auto">
                <Menu isOpen={isOpenMenu} onClose={onCloseMenu}>
                  <MenuButton onMouseOver={onOpenMenu}>Gallery</MenuButton>
                  <MenuList>
                    {categoryData &&
                      categoryData.map((category: FragmentCategory, index: number) => (
                        <Link href={`/category/${category.attributes.category_name}`} key={index} passHref>
                          <MenuItem key={index} _hover={{ color: 'yellow.500' }}>
                            {category.attributes.category_name}
                          </MenuItem>
                        </Link>
                      ))}
                  </MenuList>
                </Menu>
                {routeArray.map(([route, name]) => (
                  <Link key={name} href={route} passHref>
                    <Button
                      as="a"
                      colorScheme={isRoute(route) ? 'black' : 'black'}
                      fontWeight={isRoute(route) ? 'bold' : 'normal'}
                      variant="ghost"
                      _hover={{ color: 'yellow.500' }}
                    >
                      {name}
                    </Button>
                  </Link>
                ))}
              </HStack>
            </Flex>
          )}
          {isMobile && (
            <IconButton
              ml={2}
              size="lg"
              aria-label="hamburger"
              variant="ghost"
              icon={<HamburgerIcon h={4} w={4} />}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </Flex>
      </Container>
      {isOpen && (
        <Fade in={isOpen}>
          <Box
            position="absolute"
            display={{ base: 'block', md: 'none' }}
            w="full"
            pb={10}
            left={0}
            top={20}
            zIndex="modal"
            px={7}
          >
            <Box w="full">
              <Button
                w="full"
                color="primary.accent3"
                justifyContent="start"
                borderWidth="1px"
                borderColor="primary.accent2"
                bg="white"
                leftIcon={<SearchIcon />}
                shadow="sm"
                animation="ease-in-out"
                transition="all 0.2s"
                transitionDelay="0"
                _hover={{
                  bg: 'white',
                }}
              >
                Cari jasa, service, produk
              </Button>
            </Box>
          </Box>
        </Fade>
      )}
    </Flex>
  );
};
