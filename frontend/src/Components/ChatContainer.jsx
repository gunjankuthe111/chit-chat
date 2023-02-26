import {Box, Button, Flex, Input, Text} from "@chakra-ui/react";
import {MdKeyboardBackspace} from "react-icons/md";
import {AiOutlineEye, AiOutlineSend} from "react-icons/ai";
import React from "react";

export const ChatContainer = () => {
  return (
    <Box w="50%" border="1px" p="10px">
      <Flex justifyContent="space-between">
        <Button>
          <MdKeyboardBackspace />
        </Button>
        <Text fontSize="2xl">User</Text>
        <Button>
          <AiOutlineEye />
        </Button>
      </Flex>
      <Flex h="90%" border="1px" flexDir="column-reverse">
        <Flex alignItems="end" w="full" justifyContent="space-between">
          <Input w="85%" type="text" placeholder="Type Message Here" />
          <Button>
            <AiOutlineSend />
          </Button>
        </Flex>
        <Box overflowY="scroll" border="1px">
          <Text>gajk1</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk</Text>
          <Text>gajk7</Text>
        </Box>
      </Flex>
    </Box>
  );
};
