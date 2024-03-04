import { Typography, useTheme, Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    [<WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/sponser.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Kalyani Fitnees Center</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        To Enjoy The Glow of Good Health You Must Exercise
      </Typography>
    </WidgetWrapper>,
    <Box m="2rem 0" />,
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/tutorials.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Tutorials Point</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Simply Easy Learning At Your Fingertips
      </Typography>
    </WidgetWrapper>,
    <Box m="2rem 0" />,
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/mamaearth.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MamaEarth</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        MamaEarth Vitamin C Daily Routine Kit
      </Typography>
    </WidgetWrapper>,

    ]
  );
};

export default AdvertWidget;
