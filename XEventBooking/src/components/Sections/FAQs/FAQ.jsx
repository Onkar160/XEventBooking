import { Typography, Box, Container, Stack } from "@mui/material";
import FAQimage from "../../../assets/FAQ.jpg";
import MyAccordion from "../../Accordion/Accordion";

export default function FAQs() {
  const FAQ = [
    {
      question: "Why choose our event tracking platform?",
      answer:
        "We help you manage and track events with real-time updates and a smooth booking experience.",
    },
    {
      question: "What makes us different from others?",
      answer:
        "Our platform offers verified event details, fast bookings, and easy tracking in one place.",
    },
    {
      question: "How do we ensure data security?",
      answer:
        "We use secure practices to protect your data and keep your booking information safe.",
    },
    {
      question: "How can I get support for my events?",
      answer:
        "Reach out through our support page and we will help you as quickly as possible.",
    },
  ];
  return (
    <section>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          px: { xs: 5, md: 15 },
          py: 8,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Box textAlign="center">
            <Typography
              sx={{ color: "primary.main", mb: 1 }}
              variant="h6"
              fontWeight="600"
            >
              Get Your Answer
            </Typography>
            <Typography color="#1B3C74" variant="h3" fontWeight="600">
              Frequently Asked Questions
            </Typography>
          </Box>
          <Box
            display="flex"
            gap="60px"
            flexDirection={{ xs: "column", lg: "row" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src={FAQimage}
              alt="doctor patient image"
              width={{ xs: "100%", lg: "50%" }}
            />
            <Stack
              width="100%"
              direction="column"
              sx={{ justifyContent: "space-between" }}
              spacing={4}
            >
              {FAQ.map((question, index) => (
                <MyAccordion
                  questionData={question}
                  index={index}
                  key={index}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
