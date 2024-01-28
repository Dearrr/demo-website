import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Content = () => {
  return (
    <BackGroundImage>
      <Stack
        width={{ xs: "100%", md: "736px" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3.5}
        padding={{ xs: "50px 15px" }}
      >
        <Typography fontSize="14px" color="mainText" fontWeight="700" letterSpacing="2px">
          FREE SAMPLE
        </Typography>
        <Typography fontSize="58px" color="mainText" fontWeight="700" align="center" letterSpacing="-1px">
          Powerful Generator and Free Figma Sources
        </Typography>
        <Typography fontSize="18px" color="secondaryText" fontWeight="500" align="center" opacity="0.7">
          Startup Framework contains components and complex blocks which can easily be integrated into almost any
          design. All of the components are made in the same style, and can easily be integrated into projects, allowing
          you to create hundreds of solutions.
        </Typography>
      </Stack>
    </BackGroundImage>
  );
};

export default Content;

const BackGroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 540px;
  position: relative;
  background: #1e0e62;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #1e0e62;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
  @media (max-width: 768px) {
    height: 100%;
  }
`;
