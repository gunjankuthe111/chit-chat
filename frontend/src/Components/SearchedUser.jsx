import {Box, Flex, Img, Text} from "@chakra-ui/react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {newChat} from "../redux/user/user.actions";

export const SearchedUser = ({user}) => {
  const {token} = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <Flex
      onClick={() => dispatch(newChat(token, user._id))}
      border="1px"
      w="full"
      p="10px"
      gap="20px"
      borderRadius="10px"
      backgroundColor="teal"
      color="white"
    >
      <Box>
        <Img
          border="1px"
          src={user.pic}
          w="50px"
          h="50px"
          borderRadius="full"
        />
      </Box>
      <Box>
        <Text fontWeight="bold">{user.name}</Text>
        <Text>{user.email}</Text>
      </Box>
    </Flex>
  );
};
