import React from "react"
import {Flex, Text} from "@chakra-ui/react"
import {ReactComponent as Logo} from "../../images/svg/logo.svg"

export const Header = () => {
    return <Flex py={2} pl={2} border={'1px solid black'} gridGap={2} alignItems={"center"}>
        <Logo/>
        <Text fontSize={'xl'} fontWeight={"black"}>TheBigLogo</Text>
    </Flex>
}