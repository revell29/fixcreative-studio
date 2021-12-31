import * as React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Image,
  Stack,
  Divider,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FragmentCategory } from '~/types/base';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.RefObject<HTMLButtonElement>;
  menuCategory: FragmentCategory[];
  routes: [string, string][];
  // eslint-disable-next-line no-unused-vars
  isRoute: (route: string) => boolean;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  btnRef,
  menuCategory,
  routes,
  isRoute,
}: SideDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Link href="/" passHref>
            <Image src="/assets/logo-black.png" alt="logo" display="block" w="150px" mr="auto" />
          </Link>
        </DrawerHeader>

        <DrawerBody>
          <Divider borderColor="yellow.500" />
          <Stack spacing={5} mt={4}>
            {menuCategory.map((category) => (
              <Link href={`/category/${category.attributes.category_name}`} key={category.id} passHref>
                <Text fontSize="md" color="black">
                  {category.attributes.category_name}
                </Text>
              </Link>
            ))}
            {routes.map(([route, name]) => (
              <Link href={route} key={name} passHref>
                <Text fontSize="md" color={isRoute(route) ? 'yellow.500' : 'black'}>
                  {name}
                </Text>
              </Link>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
