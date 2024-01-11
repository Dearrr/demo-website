import { Stack } from "@mui/material";
import React from "react";
import Text from "../../Utils/Text/Text";
import styled from "styled-components";

const CrewItem = (props) => {
  const { image, name, position } = props.crew;
  return (
    <Stack gap={1.5} alignItems={{ xs: "center" }}>
      <CrewImage src={image} alt="" />
      <Text color="#ffff" fontSize="22px" fontWeight="500">
        {name}
      </Text>
      <Text color="#ffff" fontSize="16px" fontWeight="400">
        {position}
      </Text>
    </Stack>
  );
};

export default CrewItem;

const CrewImage = styled.img`
  width: 100px;
  height: 100px;
`;
