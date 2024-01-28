import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PlanPriceItem from "./components/PlanPriceItem";

const PlanPrice = () => {
  const PlanPricItem = [
    { title: "Professional", price: "19.99", functionList: ["2 GB of space", "14 days of backups"] },
  ];
  return (
    <BackGroundImage>
      <Stack>
        <Typography color="mainText" fontSize={"42px"} textAlign={"center"} fontWeight={700}>
          Plan & Price
        </Typography>
        <Typography color="mainText" fontSize={"22px"} textAlign={"center"}>
          Startup Framework is free forever — you only pay for custom domain hosting or to export your site.
        </Typography>
        <Stack>
          <PlanPriceItem />
        </Stack>
      </Stack>
    </BackGroundImage>
  );
};

export default PlanPrice;

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
