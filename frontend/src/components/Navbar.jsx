import { Flex, Button, Container, HStack, Text, useColorMode } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { CiSquarePlus } from "react-icons/ci";

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW = "1120px" px={4}>
        <Flex 
            h="4" 
            alignItems="center" 
            justifyContent="space-between" 
            flexDir={{ base: "column", sm: "row" }}
        >
            <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<RouterLink to="/">Product Store 🛒</RouterLink>
				</Text>

                <HStack spacing ={2} alignItems={"center"} >
                    <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus boxSize={5} />
                    </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button>

                </HStack>

        </Flex>
    </Container>
  );
}