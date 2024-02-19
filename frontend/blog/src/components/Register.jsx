import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/authRedux/action";
import { useDispatch } from "react-redux";

export default function Register() {
  const initUserData = {
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(initUserData);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const hanleSubmit = (e) => {
    dispatch(register(userData)).then((res) => {
      if (res === "Enter all details first") {
        return toast({
          title: "Enter all details first",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else if (res === "User Already Registered") {
        return toast({
          title: "User Already Registered",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
         
        toast({
          title: "New User has been registered",
          position: "top",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/login");

      }
    });
    console.log("clicked on handle submit");
  };

  console.log(userData);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    value={userData.first_name}
                    name="first_name"
                    onChange={handleChange}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    value={userData.last_name}
                    name="last_name"
                    onChange={handleChange}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="Gender" isRequired>
              <FormLabel>Select Gender</FormLabel>
              <Select
                value={userData.gender}
                name="gender"
                onChange={handleChange}
                placeholder="Select Gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={userData.email}
                name="email"
                onChange={handleChange}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={userData.password}
                  name="password"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={hanleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
