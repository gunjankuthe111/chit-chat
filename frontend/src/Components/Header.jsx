import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {AiOutlineBell} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import React from "react";
import {useDisclosure} from "@chakra-ui/hooks";

export const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Button variant="ghost" onClick={onOpen}>
            <BiSearch style={{width: "20px", height: "20px"}} />
            <Text ml="10px">Search User</Text>
          </Button>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="4xl">
            Chit - Chat
          </Text>
        </Box>
        <Flex>
          <Menu>
            <MenuButton>
              <AiOutlineBell style={{width: "30px", height: "30px"}} />
            </MenuButton>
            <MenuList>
              <MenuList>dcv </MenuList>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              h="50px"
              rightIcon={<MdOutlineKeyboardArrowDown />}
            >
              <Box>
                <Img
                  w="50px"
                  borderRadius="full"
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  }
                />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuList>My Profile</MenuList>
              <MenuList>Logout</MenuList>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Flex pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
              />
              <Button>Go</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
