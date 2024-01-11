import "./App.css";
import { Stack, ThemeProvider } from "@mui/material";
import LandingPage from "./Component/LandingPage/LandingPage";
import Content from "./Component/LandingPage/Content/Content";
import ShowCase from "./Component/ShowCase/ShowCase";
import Footer from "./Component/Footer/Footer";
import Crew from "./Component/Crew/Crew";
import { theme } from "./Themes/Themes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"} margin={"0 auto"}>
        <LandingPage />
        <Content />
        <ShowCase />
        <Crew />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
