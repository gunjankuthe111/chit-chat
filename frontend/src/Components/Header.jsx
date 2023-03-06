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
  VStack,
} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {AiOutlineBell} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {useState} from "react";
import {useDisclosure} from "@chakra-ui/hooks";
import {useDispatch, useSelector} from "react-redux"
import { searchData } from "../redux/user/user.actions";
import { SearchedUser } from "./SearchedUser";
import { UserMenu } from "./UserMenu";
export const Header = () => {
  const dispatch= useDispatch()
  const {searchUsers} = useSelector((u) => u.search);
  const [state, setState] = useState("");
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Flex
        py="5px"
        mb="20px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        justifyContent="space-between"
        alignItems="center"
      >
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
            <UserMenu/>
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
                value={state}
                placeholder="Search by name or email"
                onChange={({target}) => setState(target.value)}
                mr={2}
              />
              <Button onClick={() => dispatch(searchData(state))}>Go</Button>
            </Flex>
            <VStack>
              {searchUsers.map((ele) => (
                <SearchedUser key={ele._id} user={ele} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
