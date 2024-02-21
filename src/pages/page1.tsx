import {
  Box,
  BoxProps,
  Button,
  Circle,
  Heading,
  Image,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
  AspectRatio,
  Skeleton,
  Flex,
  Avatar,
  HStack,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import * as React from "react";
import { FaPlay } from "react-icons/fa";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import FileUpload from "../components/fileUpload.tsx";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function Page1({ className, children, ...rest }: AppProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileUpload = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    console.log(imageUrl);
    setUploadedImage(imageUrl);
  };

  return (
    <Box className={className}>
      <IconButton
        as={Link}
        to="/"
        position="absolute"
        top="1rem"
        left="1rem"
        colorScheme="blue"
        aria-label="Call Segun"
        size="sm"
        icon={<ArrowBackIcon />}
      />
      <Box as="section" h="100vh" bg="gray.800" color="white" py="7.5rem">
        <Box
          maxW={{ base: "xl", md: "5xl" }}
          mx="auto"
          h="100%"
          px={{ base: "6", md: "8" }}
        >
          <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={6}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </Text>
              </Box>

              <Stack
                justify="center"
                direction={{ base: "column", md: "row" }}
                mt="10"
                mb="30px"
                spacing="4"
              >
                <LightMode>
                  <FileUpload onFileUpload={handleFileUpload} />
                </LightMode>
              </Stack>
              <Stack alignItems="center">
                {true && (
                  <AspectRatio ratio={16 / 9} w="50%">
                    <Image
                      src="https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      objectPosition="top"
                      objectFit="cover"
                      fallback={<Skeleton />}
                      alt="uploaded picture"
                      borderRadius="xl"
                    />
                  </AspectRatio>
                )}
              </Stack>
            </Box>
          </Stack>
          <Flex
            direction="row"
            gap="4"
            w="100%"
            alignItems="center"
            justifyContent="center"
          >
            <Stack>
              <Text mb="8px">Extracted Text: </Text>
              <Box
                key="{member.name}"
                bg="#858d9d"
                p="6"
                boxShadow={mode("sm", "sm-dark")}
                borderRadius="md"
              >
                <Textarea value="" placeholder="" size="sm" disabled />
              </Box>
            </Stack>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="blue"
              variant="solid"
              mt="8"
            >
              Convert
            </Button>
            <Stack>
              <Text mb="8px">Corrected Text: </Text>
              <Box
                key="{member.name}"
                bg="#858d9d"
                p="6"
                boxShadow={mode("sm", "sm-dark")}
                borderRadius="md"
              >
                <Textarea value="" placeholder="" size="sm" disabled />
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
