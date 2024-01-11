import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Text from "../Utils/Text/Text";
import LandingPageContent from "./components/LandingPageContent";
import Button from "../Utils/Text/Button";
import LandingPageBg from "../../Assets/LandingPageBg.png";
import styled from "styled-components";
import Menu from "../Menu/Menu";
const LandingPage = () => {
  return (
    <BackGroundImage>
      <Box>
        {/*  <Menu /> */}
        <Stack justifyContent={"center"} alignItems={"center"} padding={{ xs: "0 15px" }}>
          <LandingPageContent />
          <Box marginTop="58px">
            <Button $backGroundcolor="#482BE7" $padding={"17px 35px"} $borderRadius="100px">
              <Typography fontSize="18px" fontWeight="500" color="mainText">
                Create An Account
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Box>
    </BackGroundImage>
  );
};

export default LandingPage;

const BackGroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 850px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(34, 4, 107, 0.45), rgba(34, 4, 107, 0.45)), url(${LandingPageBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
`;
