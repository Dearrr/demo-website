import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "../Utils/Text/Text";

const Footer = () => {
  return (
    <FooterWrapper>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        width={{ xs: "100%" }}
        maxWidth={"1400px"}
        padding={{ xs: "40px 0px", md: "45px 0px" }}
        gap={{ xs: 1, md: 0 }}
      >
        <Text color="#ffff" fontSize="24px" fontWeight="700" $textAlign="center">
          Startup 3
        </Text>
        <Stack flexDirection={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 4 }}>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Privacy Policy
          </Text>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Term
          </Text>
        </Stack>
      </Stack>
      {/* <Stack width={{ xs: "100%" }} maxWidth={"1400px"} padding={{ xs: "40px 0px", md: "45px 30px" }}>
        <CustomLine />
      </Stack> */}
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        width={{ xs: "100%" }}
        maxWidth={"1400px"}
        padding={{ xs: "40px 0px", md: "45px 0px" }}
        gap={{ xs: 1, md: 0 }}
      >
        <Stack flexDirection={{ xs: "column", md: "row" }} gap={{ xs: 1, md: 4 }}>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Tour
          </Text>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Features
          </Text>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Pricing Plan
          </Text>
          <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
            Our Works
          </Text>
        </Stack>

        <Text color="#ffff" fontSize="16px" fontWeight="400" $textAlign="center">
          © 2024 Designmodo. All rights reserved.
        </Text>
      </Stack>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #1e0e62;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

/* const CustomLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ffff;
  opacity: 0.7;
`; */
