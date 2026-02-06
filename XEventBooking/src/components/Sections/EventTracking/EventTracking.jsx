import { Container, Box, Stack, Typography } from "@mui/material";
import EventTrackingLogo from "../../../assets/EventTracking.png";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function EventTracking() {
  return (
    <section>
      <Container
      disableGutters
      maxWidth={false}
        sx={{
          px: { xs: 5, md: 15 },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          py: 8,
          gap: "60px",
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
        }}
      >
        <Box
          component="img"
          src={EventTrackingLogo}
          alt="patient_EventTrackingLogo image"
          width={{ xs: "100%", lg: "50%" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="30px"
          width={{ xs: "100%", lg: "50%" }}
          alignItems={{ xs: "center", lg: "flex-start" }}
        >
          <Box>
            <Typography
              color="#2AA7FF"
              fontWeight={600}
              textAlign={{ xs: "center", md: "start" }}
            >
              CONNECTING PEOPLE THROUGH EVENTS!!
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              textAlign={{ xs: "center", lg: "start" }}
            >
              Event <span style={{ color: "#2AA7FF" }}>Tracking</span>
            </Typography>
          </Box>
          <Typography
            color="gray"
            variant="p"
            textAlign={{ xs: "center", lg: "start" }}
          >
            Our goal is to deliver an exceptional event experience in a
            courteous, respectful, and engaging manner. We hope you will allow
            us to help you stay updated and connected through our platform.
          </Typography>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Stay Updated About Events
            </Typography>
          </Box>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Check Event Details Online
            </Typography>
          </Box>
          <Box display="flex" gap="10px" alignItems="center">
            <VerifiedIcon sx={{ color: "#2AA7FF" }} />
            <Typography variant="p" fontWeight={500} color="#1B3C74">
              Manage Your Bookings
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
