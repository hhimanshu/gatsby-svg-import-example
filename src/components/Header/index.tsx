import React from "react"
import {Box, Icon, Text} from "@chakra-ui/react"
import Logo from "../../images/svg/logo.svg"

const Header = () => {
    return <Box h={56} border={'1px solid black'}>
        <Text fontSize={"7xl"}><Icon as={Logo} height={'50'} w={'auto'} mx={5}/>TheBigLogo</Text>
    </Box>
}

export default Header