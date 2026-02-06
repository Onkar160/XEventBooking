import { Container, Box, Typography } from "@mui/material";
import Peoples from "../../../assets/Peoples.png";

export default function EventTracker() {
  return (
    <section>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          px: { xs: 5, md: 15 },
          py: { xs: 8, lg: 3 },
          alignItems: "center",
          justifyContent: "center",
          gap: "80px",
        }}
      >
        <Box
          width={{ xs: "100%", lg: "35%" }}
          display="flex"
          flexDirection="column"
          gap="40px"
        >
          <Box>
            <Typography
              color="#2AA7FF"
              fontWeight={600}
              textAlign={{ xs: "center", lg: "start" }}
            >
              TRACKING EVENTS AND INSIGHTS FOR YOU AND YOUR TEAM.
            </Typography>
            <Typography
              color="#1B3C74"
              fontWeight={600}
              variant="h3"
              textAlign={{ xs: "center", lg: "start" }}
            >
              Event Tracker
            </Typography>
          </Box>
          <Typography
            color="#77829D"
            variant="p"
            textAlign={{ xs: "center", lg: "start" }}
            lineHeight={2.5}
          >
            We help you track attendance, engagement, and bookings so you can
            improve your event experience. If you need help, we provide support
            and guidance with quick insights and easy access to key metrics.
          </Typography>
        </Box>
        <Box
          component="img"
          src={Peoples}
          alt="Mobile_image"
          width={{ xs: "100%", lg: "40%" }}
        />
      </Container>
    </section>
  );
}
