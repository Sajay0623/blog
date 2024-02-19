import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  TagLabel,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export const CreateBlog = () => {
  const initState = {
    username : "",
    title: "",
    description: "",
    picture: "",
    categories: "",
    createTime: new Date(),
  };

  const [postData, setPostData] = useState(initState);
  console.log(postData);
  return (
    <Box w={"95%"} m={"auto"}>
      <Image
        w={"100%"}
        h={"350px"}
        fit={"cover"}
        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Image>
      <Flex mt={2} flexDir={"row"} align={"center"} justify={"center"}>
        <FormLabel htmlFor="addImage">
          <AddIcon mr={3} />
        </FormLabel>

        <Input
          value={postData.picture}
          onChange={(e) =>
            setPostData({ ...postData, picture: e.target.files[0] })
          }
          id="addImage"
          display={"none"}
          type="file"
        />
        <Input
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          flex={1}
          placeholder="Title"
        ></Input>
        <Button>Post a blog</Button>
      </Flex>
      <Textarea
        value={postData.description}
        onChange={(e) =>
          setPostData({ ...postData, description: e.target.value })
        }
        mt={5}
        border={"none"}
        placeholder="Tell your Story...."
      />
    </Box>
  );
};
