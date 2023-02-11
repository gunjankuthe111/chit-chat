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

export const Login = () => {
  const [state, setState] = useState({email: "", password: ""});
  const [passVis, setPassVis] = useState(false);
  return (
    <VStack spacing="20px">
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
            type={passVis ? "text" : "password"}
            placeholder="Enter your Password here"
          />
          <InputRightElement>
            <Button
              onClick={() => setPassVis(!passVis)}
              px="30px"
              variant="ghost"
              mr="40px"
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" onClick={() => console.log(state)} w="full">
        Login
      </Button>
      <Button colorScheme="blue" w="full">
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};
