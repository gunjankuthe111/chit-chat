import React from "react";
import { Container, Flex} from "@chakra-ui/react";
import {Header} from "../Components/Header";
import {Contacts} from "../Components/Contacts";
import {ChatContainer} from "../Components/ChatContainer";
export const Chat = () => {
  return (
    <Container maxW="full" h="100vh" border="1px">
      <Header />
      <Flex justifyContent="space-between">
        <Contacts />
        <ChatContainer />
      </Flex>
    </Container>
  );
};
