import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const PlanPriceItem = () => {
  return (
    <PricePlanItemWrapper>
      <Typography color="mainText" fontSize={"22px"} fontWeight={500}>Professional</Typography>
    </PricePlanItemWrapper>
  );
};

export default PlanPriceItem;

const PricePlanItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #cdccd2;
  border-radius: 5px;
  padding: 44px 64px;
`;
