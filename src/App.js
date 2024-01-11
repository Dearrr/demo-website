import "./App.css";
import { Stack } from "@mui/material";
import LandingPage from "./Component/LandingPage/LandingPage";
import Content from "./Component/LandingPage/Content/Content";
import ShowCase from "./Component/ShowCase/ShowCase";
import Footer from "./Component/Footer/Footer";
import Crew from "./Component/Crew/Crew";

function App() {
  return (
    <Stack width={"100%"} justifyContent={"center"} alignItems={"center"} margin={"0 auto"}>
      <LandingPage />
      <Content />
      <ShowCase />
      <Crew />
      <Footer />
    </Stack>
  );
}

export default App;
