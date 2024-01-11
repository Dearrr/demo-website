import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "../Utils/Text/Text";
import CrewItem from "./components/CrewItem";
import Crew1 from "../../Assets/crew1.svg";
import Crew2 from "../../Assets/crew2.svg";
import Crew3 from "../../Assets/crew3.svg";
import Crew4 from "../../Assets/crew4.svg";
import Crew5 from "../../Assets/crew5.svg";

const Crew = () => {
  const crews = [
    {
      id: 1,
      image: Crew1,
      name: "Leah Salomon",
      position: "UI Designer",
    },
    {
      id: 2,
      image: Crew2,
      name: "Colin Timmons",
      position: "UX Designer",
    },
    {
      id: 3,
      image: Crew3,
      name: "Miguel Osborne",
      position: "Front-end Developer",
    },
    {
      id: 4,
      image: Crew4,
      name: "Taylor Simon",
      position: "Product Manager",
    },
    {
      id: 5,
      image: Crew5,
      name: "Steven MacAlister",
      position: "Copyrighter",
    },
  ];
  return (
    <CrewWrapper>
      <Stack justifyContent={{ xs: "center" }} width={{ md: "1400px" }} padding={{ xs: "40px 15px", md: "100px 30px" }} gap={2}>
        <Typography color="mainText" fontSize="42px" fontWeight="700">
          Startup Crew
        </Typography>
        <Typography color="mainText" fontSize="22px" fontWeight="500">
          The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you
          can use as is or you can add new blocks from UI Kit.
        </Typography>
        <WorksGrid>
          {crews.map((crew) => (
            <CrewItem key={crew.id} crew={crew} />
          ))}
        </WorksGrid>
      </Stack>
    </CrewWrapper>
  );
};

export default Crew;

const CrewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #1e0e62;
`;

const WorksGrid = styled.div`
  display: flex;
  gap: 155px;
  margin-top: 70px;
  flex-wrap: wrap;
  /* grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  margin-top: 70px;
  width: 100%; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;
