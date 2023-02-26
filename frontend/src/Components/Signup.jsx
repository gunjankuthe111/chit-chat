import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, {useState} from "react";

export const Signup = () => {
  const [image, setImage] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [passVis, setPassVis] = useState({first: false, second: false});

  const handlePic = () => {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "mcoekz23");
    imageData.append("cloud_name", "djneamvbu");
    fetch("https://api.cloudinary.com/v1_1/djneamvbu/image/upload", {
      method: "post",
      body: imageData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <VStack spacing="20px">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={state.name}
          onChange={({target}) => setState({...state, name: target.value})}
          type="text"
          placeholder="Enter your name here"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email Addresss</FormLabel>
        <Input
          value={state.email}
          onChange={({target}) => setState({...state, email: target.value})}
          type="text"
          placeholder="Enter your email address here"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={state.password}
            onChange={({target}) =>
              setState({...state, password: target.value})
            }
            type={passVis.first ? "text" : "password"}
            placeholder="Enter your Password here"
          />
          <InputRightElement>
            <Button
              onClick={() => setPassVis({...passVis, first: !passVis.first})}
              px="30px"
              variant="ghost"
              mr="40px"
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            value={state.confirmPass}
            onChange={({target}) =>
              setState({...state, confirmPass: target.value})
            }
            type={passVis.second ? "text" : "password"}
            placeholder="Enter your Password here again"
          />
          <InputRightElement>
            <Button
              onClick={() => setPassVis({...passVis, second: !passVis.second})}
              px="30px"
              variant="ghost"
              mr="40px"
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload Your Picture</FormLabel>
        <Input
          type="file"
          p={2}
          accept="image/*"
          onChange={({target}) => setImage(target.files[0])}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handlePic} w="full">
        Signin
      </Button>
    </VStack>
  );
};
