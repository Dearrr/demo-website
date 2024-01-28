import "./App.css";
import { Stack, ThemeProvider } from "@mui/material";
import LandingPage from "./Component/LandingPage/LandingPage";
import Content from "./Component/Content/Content";
import ShowCase from "./Component/ShowCase/ShowCase";
import Footer from "./Component/Footer/Footer";
import Crew from "./Component/Crew/Crew";
import { theme } from "./Themes/Themes";
import PlanPrice from "./Component/PlanPrice";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"} margin={"0 auto"}>
        <LandingPage />
        <Content />
        <ShowCase />
        {/* <PlanPrice /> */}
        <Crew />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
