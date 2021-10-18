import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Logo from "../../images/svg/logo.svg"

export const Header = () => {
  return <Box h={56} border={'1px solid black'}>
    <Logo />
    <Text>TheBigLogo</Text>
  </Box>
}