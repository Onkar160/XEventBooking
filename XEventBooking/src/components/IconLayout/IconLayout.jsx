import { Typography, Box, Stack, Grid } from "@mui/material";
import Event from "../../assets/Event.png";
import Venues from "../../assets/Venues.png";
import Tickets from "../../assets/Tickets.png";
import Workshops from "../../assets/Workshops.png";
import Services from "../../assets/Services.png";
import IconCard from "../IconCard/IconCard";

export default function IconLayout() {
  const cardData = [
    {
      text: "Events",
      icon: Event,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Venues",
      icon: Venues,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Tickets",
      icon: Tickets,
      bgcolor: "#FAFBFE",
      selected: true,
      boxshadow: false,
    },
    {
      text: "Workshops",
      icon: Workshops,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
    {
      text: "Services",
      icon: Services,
      bgcolor: "#FAFBFE",
      selected: false,
      boxshadow: false,
    },
  ];

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Typography variant="h5" color="#102851" fontWeight="500">
        You may be looking for
      </Typography>
      <Grid
        container
        width="100%"
        spacing={{ xs: 0.5, sm: 2, md: 3 }}
        sx={{ flexWrap: "wrap" }}
        justifyContent="center"
      >
        {cardData.map((card) => (
          <Grid size={{ xs: 6, sm: 5, md: 4, lg: 3, xl: 2.2 }} key={card.text}>
            <IconCard
              icon={card.icon}
              text={card.text}
              bgcolor={card.bgcolor}
              selected={card.selected}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
