import { Stack } from "@mui/material";
import React from "react";
import Text from "../Utils/Text/Text";
import styled from "styled-components";
const Menu = () => {
  return (
    <MenuWrapper
      width={"736px"}
      flexDirection={"row"}
      position={"absolute"}
      top="0"
      gap={6}
      justifyContent={"center"}
      marginTop={"85px"}
    >
      <Text color="#fff" fontWeight="500">
        Home
      </Text>
      <Text color="#fff" fontWeight="500">
        Features
      </Text>
      <Text color="#fff" fontWeight="500">
        Pricing
      </Text>
      <Text color="#fff" fontWeight="500">
        Blog
      </Text>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled(Stack)``;
