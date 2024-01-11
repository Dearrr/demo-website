import { Stack, Typography } from "@mui/material";
import React from "react";
import Text from "../../Utils/Text/Text";
import styled from "styled-components";

const CrewItem = (props) => {
  const { image, name, position } = props.crew;
  return (
    <Stack gap={1.5} alignItems={{ xs: "center" }}>
      <CrewImage src={image} alt="" />
      <Typography color="mainText" fontSize="22px" fontWeight="500">
        {name}
      </Typography>
      <Typography  color="mainText" fontSize="16px" fontWeight="400">
        {position}
      </Typography>
    </Stack>
  );
};

export default CrewItem;

const CrewImage = styled.img`
  width: 100px;
  height: 100px;
`;
