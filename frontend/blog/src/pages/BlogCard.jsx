"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function BlogCard({ Blog }) {
  return (
    <Box
      h={"370px"}
      maxW={"280px"}
      w={"full"}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={3}
      overflow={"hidden"}
    >
      <Box h={"200px"} bg={"gray.100"} mt={-6} mx={-6} mb={3} pos={"relative"}>
        <Image
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          fill
          alt="Example"
        />
      </Box>
      <Stack>
        <Text
          color={"green.500"}
          textTransform={"uppercase"}
          fontWeight={500}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {Blog}
        </Text>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("gray.700", "white")}
          fontSize={"xl"}
          fontFamily={"body"}
        >
          Boost your conversion rate
        </Heading>
        <Text color={"gray.500"}>Lorem ipsum dolor sit amet,</Text>
      </Stack>
      <Stack mt={4} direction={"row"} spacing={4} align={"center"}>
        <Avatar src={"https://avatars0.githubusercontent.com/u/1164541?v=4"} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>Achim Rolle</Text>
          <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
