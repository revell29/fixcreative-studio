import * as React from 'react';
import {
  Flex,
  Container,
  Link as ChakraLink,
  Button,
  HStack,
  useMediaQuery,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FragmentCategory } from '~/types/base';
import { SideDrawer } from './drawer';

const routeArray = Object.entries(routes as Record<string, string>);

interface NavbarProps {
  categoryData: FragmentCategory[];
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { categoryData } = props;
  const router = useRouter();
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDisclosure();

  const isRoute = React.useCallback(
    (route: string) => {
      return router.route == route;
    },
    [router.route]
  );

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
              onClick={onOpenDrawer}
            />
          )}
        </Flex>
      </Container>
      <SideDrawer
        isOpen={isOpenDrawer}
        onClose={onCloseDrawer}
        btnRef={btnRef}
        menuCategory={categoryData}
        routes={routeArray}
        isRoute={(route: string) => isRoute(route)}
      />
    </Flex>
  );
};
