import { Box, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Flex as="header" align="center" justify="space-between" wrap="wrap" padding={4} bg="teal.500" color="white">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Delicious Meals
            </Heading>
          </Flex>

          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            <IconButton icon={isMenuOpen ? <FaTimes /> : <FaBars />} variant="outline" aria-label="Open Menu" />
          </Box>

          <Stack direction={{ base: "column", md: "row" }} display={{ base: isMenuOpen ? "block" : "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link href="https://example.com/about" isExternal _hover={{ textDecoration: "none" }}>
              About
            </Link>
            <Link href="https://example.com/menu" isExternal _hover={{ textDecoration: "none" }}>
              Menu
            </Link>
            <Link href="https://example.com/contact" isExternal _hover={{ textDecoration: "none" }}>
              Contact
            </Link>
          </Stack>
        </Flex>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="gray.100" flex="1">
          <VStack spacing={8}>
            <Heading as="h2" size="2xl">
              Taste the Best
            </Heading>
            <Text fontSize="xl">Discover the flavors of the world with us.</Text>
            <Image src="https://images.unsplash.com/photo-1601823281975-75d81b28c373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGlzaHxlbnwwfHx8fDE3MTQ5MjY3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured Dish" boxSize="300px" objectFit="cover" borderRadius="full" />
          </VStack>
        </Flex>

        {/* Footer */}
        <Box bg="teal.500" color="white" p={4}>
          <Flex justify="center" align="center">
            <Text fontSize="sm">© 2023 Delicious Meals. All rights reserved.</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
