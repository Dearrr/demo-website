import { Stack, Typography } from "@mui/material";
import React from "react";
import Text from "../../Utils/Text/Text";

const LandingPageContent = () => {
  return (
    <Stack width={{ xs: "100%", md: "736px" }} justifyContent={"center"} alignItems={"center"} gap={3.5}>
      <Typography fontSize="24px" fontWeight="700" color="mainText">
        Startup 3
      </Typography>
      <Typography fontSize="72px" fontWeight="700" align="center" color="mainText">
        Forget About Code
      </Typography>
      <Typography fontSize="22px" fontWeight="500" color="mainText" align="center">
        Startup Framework gives you complete freedom over your creative process — you don’t have to think about any
        technical aspects. There are no limits and absolutely no coding.
      </Typography>
    </Stack>
  );
};

export default LandingPageContent;
