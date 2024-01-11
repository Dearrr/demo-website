import { Stack } from "@mui/material";
import React from "react";
import Text from "../../Utils/Text/Text";

const LandingPageContent = () => {
  return (
    <Stack width={{ xs: "100%", md: "736px" }} justifyContent={"center"} alignItems={"center"} gap={3.5}>
      <Text fontSize="24px" fontWeight="700" color="white">
        Startup 3
      </Text>
      <Text fontSize="72px" fontWeight="700" $textAlign="center" color="white">
        Forget About Code
      </Text>
      <Text fontSize="22px" fontWeight="500" $textAlign="center" color="white">
        Startup Framework gives you complete freedom over your creative process — you don’t have to think about any
        technical aspects. There are no limits and absolutely no coding.
      </Text>
    </Stack>
  );
};

export default LandingPageContent;
