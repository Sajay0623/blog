import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import BlogCard from "../pages/BlogCard";
import { Link, useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const categories = ["Music", "ABC", "Movies", "Sports", "Tech", "Fashion"];
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    //  axios("http://localhost:5000/user/register");
  };

  return (
    <Grid
      // templateRows="repeat(2, 45% 55%)"
      templateColumns="repeat(5, 1fr)"
      w={"98%"}
      h={"auto"}
      m={"auto"}
      gap={1}
      border={"1px solid red"}
    >
      <GridItem colSpan={5}>
        <Image
          h={"300px"}
          fit={"fill"}
          w={"100%"}
          src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></Image>
      </GridItem>
      <GridItem colSpan={1}>
        <VStack>
          <Link to={`/createblog?category=${category} || ""`}>
            <Button
              as="a"
              bg={"transparent"}
              colorScheme="black"
              variant="ghost"
              w={"100%"}
            >
              Add A Blog
            </Button>
          </Link>
          <Heading as="h4" size="md">
            <Link to="/">All Categories</Link>
          </Heading>
          {categories.map((cat, i) => (
            <Link key={i} to={`/?category=${cat}`}>
              {cat}
            </Link>
          ))}
        </VStack>
      </GridItem>
      <GridItem colSpan={4} bg="blue.500">
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {categories.map((cat, i) => (
            <BlogCard key={i} Blog={cat} />
          ))}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
