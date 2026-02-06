import { Typography, Box, Container, Stack, Button } from "@mui/material";
import { Link } from "react-router";
import HeroImage from "../../assets/Hero_Image.png";

export default function Hero() {
  return (
    <section>
      <Container
        sx={{
          background:
            "linear-gradient(to right, #E7F0FF 0%, #E8F1FF 47%, #E8F1FF 100%)",
          px: { xs: 5, md: 15 },
          py: 5,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 5, lg: 0 },
        }}
        disableGutters
        maxWidth={false}
      >
        <Stack
          sx={{ width: { xs: "100%", lg: "50%" }, alignSelf: "flex-start" }}
        >
          <Box>
            <Typography variant="h4" color="#102851" fontWeight={600}>
              Skip the hassle! Track Online
            </Typography>
            <Typography
              variant="h2"
              fontWeight={900}
              letterSpacing={2}
              lineHeight={1.3}
              fontStyle="bold"
            >
              Event <span style={{ color: "#2AA7FF" }}>Tracker</span>
            </Typography>
          </Box>

          <Typography variant="h6" color="#5C6169" fontWeight={400} mt={3}>
            Connect instantly with our platform to manage and track your events
            efficiently.
          </Typography>

          <Link to="/search" style={{ marginTop: "35px" }}>
            <Button
              variant="contained"
              size="large"
              sx={{ boxShadow: "none", borderRadius: "8px", px: 5, py: 1.5 }}
            >
              Find Events
            </Button>
          </Link>
        </Stack>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <img
            src={HeroImage}
            alt="Doctor Hero Image"
            style={{ filter: "drop-shadow(-5px 20px 10px rgba(0, 0, 0, 0.3))" }}
            width="100%"
          />
        </Box>
      </Container>
    </section>
  );
}
