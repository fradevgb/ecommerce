import Link from "next/link";
import Image from "next/image";
import { Box, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Show } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const menu = [
  {
    title: 'About Us',
    href: '#'
  },
  {
    title: 'Woman',
    href: '#'
  },
  {
    title: 'Men',
    href: '#'
  },
  {
    title: 'Beauty',
    href: '#'
  },
  {
    title: 'Accesories',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  },
  {
    title: 'Contact',
    href: '#'
  },
]


export function Header() {
  return (
    <Box as="header" w="100%" borderBottom="solid 2px" borderColor="gray.100">
      <Container as={Flex} justifyContent="space-between" alignItems="center" size="lg">
        <Flex gap="0.5rem" margin="1rem 0">
          <Show below="sm">
            <Box as="nav">
              {/*TODO: find a way to remove the code duplication*/}
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                />
                <MenuList>
                  {
                    menu.map((item, index) => {
                      return <MenuItem key={index}>
                        <Link href={item.href}>{item.title}</Link>
                      </MenuItem>
                    })
                  }
                </MenuList>
              </Menu>
            </Box>
          </Show>
          <Image src="/logo.svg" alt="" width={100} height={48} />
        </Flex>
        <Show above="sm">
          <Box as="nav">
            <Flex as="ul" listStyleType="none" gap="2rem">
              {
                menu.map((item, index) => {
                  return <li key={index}><Link href={item.href}>{item.title}</Link></li>
                })
              }
            </Flex>
          </Box>
        </Show>
        <div className="commerce-menu">
          <Flex as="ul" listStyleType="none" gap="1.5rem">
            <li>
              <Link href="#"><Image src="/ico-search.svg" alt="" width="24" height="24" /></Link>
            </li>
            <li>
              <Link href="#"><Image src="/ico-globe.svg" alt="" width="24" height="24" /></Link>
            </li>
            <li>
              <Link href="#"><Image src="/ico-user.svg" alt="" width="24" height="24" /></Link>
            </li>
            <li>
              <Link href="#"><Image src="/ico-bag.svg" alt="" width="24" height="24" /></Link>
            </li>
          </Flex>
        </div>
      </Container>
    </Box>
  )
}