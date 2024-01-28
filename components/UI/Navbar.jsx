// components/Navbar.js
import { Box, Flex, Input, IconButton, useColorMode } from '@chakra-ui/react';
import { SearchIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" bg="white" color="white" p={4} boxShadow="md">
      <Flex justify="space-between" align="center">
        {/* Search Component */}
        <Input
          type="text"
          placeholder="Search"
          size="sm"
          bgColor="white"
          color="black"
          borderRadius="full"
          px={4}
          mr={2}
        />
        <IconButton
          icon={<SearchIcon />}
          aria-label="Search"
          bgColor="green.300"
          borderRadius="full"
          p={2}
          ml={2}
        />

        {/* Theme Switcher */}
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
          bgColor="green.200"
          borderRadius="full"
          p={2}
          ml={2}
        />

        {/* Profile Icon (Replace with your own icon or component) */}
        <Box
          as="img"
          src="/vercel.svg"
          alt="Profile"
          borderRadius="full"
          boxSize="32px"
          ml={2}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
