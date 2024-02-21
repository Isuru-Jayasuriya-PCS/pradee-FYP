import {
  Box,
  BoxProps,
  Button,
  Circle,
  Heading,
  Img,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaPlay } from "react-icons/fa";
import { ReactNode } from "react";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { Link } from "react-router-dom";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function Home({ className, children, ...rest }: AppProps) {
  return (
    <Box className={className}>
      <Box as="section" h="100vh" bg="gray.800" color="white" py="7.5rem">
        <Box
          maxW={{ base: "xl", md: "5xl" }}
          mx="auto"
          h="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ base: "6", md: "8" }}
        >
          <Box>
            <Box textAlign="center">
              <Heading
                as="h1"
                size="3xl"
                fontWeight="extrabold"
                maxW="48rem"
                mx="auto"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                Lorem ipsum dolor sit amet, consectetur
              </Heading>
              <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </Box>

            <Stack
              justify="center"
              direction={{ base: "column", md: "row" }}
              mt="10"
              mb="20"
              spacing="4"
            >
              <LightMode>
                <Button
                  as={Link}
                  to="/page1"
                  size="lg"
                  colorScheme="pink"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  Button 1
                </Button>
                <Button
                  as={Link}
                  to="/page2"
                  size="lg"
                  colorScheme="whiteAlpha"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                >
                  Button 2
                </Button>
              </LightMode>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
