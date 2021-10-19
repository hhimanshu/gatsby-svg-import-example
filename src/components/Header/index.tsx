import React from "react"
import {Box, Icon, Text} from "@chakra-ui/react"
import logoUrl, {ReactComponent as Logo} from "../../images/svg/logo.svg"

export const Header = () => {
    return <Box h={56} border={'1px solid black'}>
        {/*<Text fontSize={"7xl"}><Icon as={Logo}/>TheBigLogo</Text>*/}
        <Logo/>
    </Box>
}

//export default Header