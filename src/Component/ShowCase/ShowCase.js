import React from "react";
import Text from "../Utils/Text/Text";
import styled from "styled-components";
import { Stack } from "@mui/material";
import ShowCaseItem from "./component/ShowCaseItem";
import Work1 from "../../Assets/work1.jpg";
import Work2 from "../../Assets/work2.jpg";
import Work3 from "../../Assets/work3.jpg";
import Work4 from "../../Assets/work4.jpg";

const ShowCase = () => {
  const worksItem = [
    {
      id: 1,
      src: Work1,
      title: "Mozart Project",
      subTitle: "UI kit",
    },
    {
      id: 2,
      src: Work2,
      title: "Startup Framework 2.0",
      subTitle: "Framework",
    },
    {
      id: 3,
      src: Work3,
      title: "From the Sky",
      subTitle: "Photos",
    },
    {
      id: 4,
      src: Work4,
      title: "Air Forces",
      subTitle: "Pictures",
    },
  ];
  return (
    <BackGroundImage>
      <Stack width={{ xs: "100%", md: "1400px" }} padding={{ xs: "40px 15px", md: "100px 30px" }} gap={6}>
        <Text color="#ffff" fontWeight="700" fontSize="42px">
          Last Works
        </Text>
        <WorksGrid>
          {worksItem.map((item) => (
            <ShowCaseItem key={item.id} item={item} />
          ))}
        </WorksGrid>
      </Stack>
    </BackGroundImage>
  );
};

export default ShowCase;

const BackGroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1e0e62;
  /*  position: relative;
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
  } */

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const WorksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
