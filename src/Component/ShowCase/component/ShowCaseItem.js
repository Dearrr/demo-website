import { Stack, Box } from "@mui/material";
import Text from "../../Utils/Text/Text";
import styled from "styled-components";

const ShowCaseItem = (props) => {
  const { src, title, subTitle } = props.item;
  return (
    <Stack justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={2}>
      <ShowCaseImage src={src} />

      <Text color="#fff" fontSize="14px" fontWeight="700" letterSpacing="2px" $textAlign="center">
        {subTitle}
      </Text>
      <Text color="#fff" fontSize="22px" fontWeight="500">
        {title}
      </Text>
    </Stack>
  );
};

export default ShowCaseItem;

const ShowCaseImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  
`;
