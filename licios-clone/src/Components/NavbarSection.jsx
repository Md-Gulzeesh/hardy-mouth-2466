import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import styles from "./NavbarSection.module.css";
// import NavDropdown from "react-bootstrap/NavDropdown";
// Bright Gray :#eaeaea
// Red pink shade:#d11243
// Peach Orange:#ffdc93
// Light shade of gray :#f8f8f8
const NavbarSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex className={styles.navFooter}>
      {/* Navbar Top Section */}
      {/* <Flex>
        <Link to="">Why licious?</Link>
      </Flex> */}
      {/* Navbar Footer Section */}
      {/* <Flex> */}
      {/* Logo */}
      <Box>
        <Image
          src="https://www.licious.in/img/rebranding/licious-logo.svg"
          alt="logo"
        />
      </Box>
      {/* Location Section  */}
      <Flex>
        <Box mt="2px">
          <Image
            width="29px"
            src="https://www.licious.in/img/rebranding/location_icon.svg"
            alt="location-icon"
          />
        </Box>
        <Flex>
          <Popover>
            <PopoverTrigger>
              <Box className={styles.popover}>
                <Text fontSize="10px">Delhi</Text>
                <Flex gap="5px">
                  <Text fontSize="12px">Delhi,India</Text>
                  <FaChevronDown />
                </Flex>
              </Box>
            </PopoverTrigger>
            <PopoverContent width="1000px" mt="1rem" ml="2rem">
              <PopoverArrow />
              <PopoverBody bg="#fafafa">
                <Text textAlign="center" className={styles.chooseLocationText}>
                  Choose your location
                </Text>
                <Flex
                  style={{
                    boxShadow: "0 0 16px rgb(0 0 0 / 11%)",
                    width: "80%",
                    padding: "20px 30px",
                    margin: "10px auto",
                  }}
                >
                  <InputGroup width="65%" m="auto" style={{outline:"none"}}>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <Image
                          w="15px"
                          src="https://www.licious.in/img/rebranding/search_icon.svg"
                          alt="search icon"
                        />
                      }
                    />
                    <Input
                      style={{
                        borderRadius: "25px",
                        border: "1px solid #9b9b9b",
                      }}
                      focusBorderColor="none"
                      placeholder="Enter your locality eg. Indiranagar..."
                    />
                    <InputRightElement
                      children={
                        <Image
                          w="22px"
                          src="https://www.licious.in/img/rebranding/use_my_location.png"
                          alt="location icon"
                        />
                      }
                    />
                  </InputGroup>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
      {/* Search Input */}
      <Box>
        <InputGroup>
          <Input
            className={styles.searchField}
            focusBorderColor="none"
            placeholder="Search for any delicious product"
          />
          <InputRightElement
            children={
              <Image
                w="20px"
                src="https://www.licious.in/img/rebranding/search_icon.svg"
                alt="search icon"
              />
            }
          />
        </InputGroup>
      </Box>
      {/* Category Section */}
      <Flex className={styles.categoryDiv}>
        <Box>
          <Image
            w="24px"
            src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
            alt="category"
          />
        </Box>
        <Text>Categories</Text>
      </Flex>
      {/* Login Section */}
      <Box className={styles.login}>
        <Flex ref={btnRef} onClick={onOpen}>
          <Box>
            <Image
              src="https://www.licious.in/img/rebranding/profile_icon.svg"
              alt="login-icon"
            />
          </Box>
          <Text>Login</Text>
        </Flex>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
      {/* Cart Section */}
      <Flex className={styles.cart}>
        <Box>
          <Image
            src="https://www.licious.in/img/rebranding/cart_icon.svg"
            alt="cart"
          />
        </Box>
        <Text>Cart</Text>
      </Flex>

      {/* </Flex> */}
    </Flex>
  );
};
export default NavbarSection;
