import {Box, Button, Flex, Stack, Text} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {showContacts} from "../redux/user/user.actions";

export const Contacts = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((s) => s.auth);
  const {contacts} = useSelector((s) => s.user);
  console.log(contacts)
  useEffect(() => {
    dispatch(showContacts(token));
  }, []);
  return (
    <Box p={3} w="40%" border="1px">
      <Flex
        pb="30px"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontWeight="bold">My Chats</Text>
        <Button
          rightIcon={<AiOutlinePlus style={{width: "20px", height: "20px"}} />}
        >
          New Group Chat
        </Button>
      </Flex>
      <Stack overflowY="scroll" maxH="30vh">
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
        <Box h="30px" border={"1px"}>
          fdl
        </Box>
      </Stack>
    </Box>
  );
};
