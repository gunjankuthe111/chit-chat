import {
  MenuItem,
  MenuList,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Img,
  Text,
} from "@chakra-ui/react";
import React from 'react'
import { useSelector } from "react-redux";

export const UserMenu = () => {
  const {email,name,pic} = useSelector(s=>s.auth)
   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MenuList>
        <MenuItem onClick={onOpen}>My Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logged User</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Box w="100px" h="100px" m="auto">
              <Img
                borderRadius="full"
                w="full"
                src={pic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
              />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">{name}</Text>
            <Text fontSize="xl">{email}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
