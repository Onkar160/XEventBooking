import { Box, Typography, Button, Stack, Grid } from "@mui/material";
import EventCardLogo from "../../assets/EventCardLogo.png";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Calender from "../Calender/Calender";
import { useState } from "react";
import moment from "moment";

const getEventName = (event) =>
  event?.eventName ||
  event?.name ||
  event?.title ||
  event?.["Event Name"] ||
  event?.["Hospital Name"] ||
  "Event";

const getEventCity = (event) => event?.city || event?.["City"] || "";
const getEventState = (event) => event?.state || event?.["State"] || "";
const getEventAddress = (event) => event?.address || event?.["Address"] || "";
const getEventId = (event) =>
  event?.id ||
  event?.eventId ||
  event?.eventName ||
  event?.name ||
  event?.title ||
  event?.["Provider ID"] ||
  event?.["Hospital Name"] ||
  getEventAddress(event);

export default function Card({ type, event }) {
  const [open, setOpen] = useState(false);
  const eventId = getEventId(event);

  return (
    <Box>
      <Grid container spacing={0} width="100%" alignItems="center">
        <Grid size={{ xs: 12, lg: 3 }}>
          <Box component="img" src={EventCardLogo} />
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CardDetails open={open} setOpen={setOpen} type={type} event={event} />
        </Grid>
      </Grid>
      {type === "Event Card" && (
        <Box pt={3} display={open ? "block" : "none"}>
          <Calender name={eventId} />
        </Box>
      )}
    </Box>
  );
}

const CardDetails = ({ open, setOpen, type, event }) => {
  const openCalender = () => {
    setOpen(!open);
  };

  const eventName = getEventName(event);
  const eventCity = getEventCity(event);
  const eventState = getEventState(event);
  const eventAddress = getEventAddress(event);

  return (
    <Grid container direction="column">
      <Grid size={12}>
        <Stack>
          <Box
            display="flex"
            alignItems="center"
            gap={0}
            flexWrap="wrap"
            mb={1}
          >
            <Typography
              color="#14BEF0"
              variant="h3"
              fontWeight={600}
              fontSize="24px"
              mr={2}
              mb={1}
            >
              {eventName}
            </Typography>
            <Box display={type === "Booking Card" ? "block" : "none"}>
              <Button variant="outlined" sx={{ marginRight: "15px" }}>
                <Typography
                  variant="p"
                  fontSize="16px"
                  color="#2AA7FF"
                  fontWeight={400}
                  width="72px"
                >
                  {event?.bookingTime}
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{ marginRight: "15px", borderColor: "#00A500" }}
              >
                <Typography
                  variant="p"
                  fontSize="16px"
                  color="#007100"
                  fontWeight={400}
                  width="100px"
                  fontWeight={500}
                >
                  {event?.bookingDate
                    ? moment(new Date(event.bookingDate)).format("ddd, DD MMM")
                    : ""}
                </Typography>
              </Button>
            </Box>
          </Box>

          <Stack>
            <Typography variant="p" fontWeight={600}>
              {eventCity}, {eventState}
            </Typography>
            <Typography variant="p" color="#414146" mb={1}>
              {eventAddress}
            </Typography>
          </Stack>
          <Typography
            variant="p"
            color="#414146"
            pb={2}
            sx={{ borderBottom: "0.5px dashed gray" }}
            width="fit-content"
          >
            <span
              style={{
                color: "#02A401",
                fontWeight: "700",
                marginRight: "8px",
              }}
            >
              FREE
            </span>
            <span
              style={{ textDecoration: "line-through", marginRight: "8px" }}
            >
              ₹500
            </span>
            Registration fee
          </Typography>
        </Stack>
      </Grid>
      <Grid size={12}>
        <Box
          display="flex"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent={{ xs: "flex-start", sm: "space-between" }}
          pt={2.5}
        >
          <Box
            bgcolor="#02A401"
            width={50}
            color="white"
            borderRadius={2}
            p={0.3}
            height="fit-content"
          >
            <Typography
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ThumbUpAltIcon sx={{ mr: 0.5 }} />{" "}
              <span style={{ paddingTop: "3px" }}>4.5</span>
            </Typography>
          </Box>
          <Stack
            spacing={1}
            alignItems="center"
            width="45%"
            alignSelf="flex-end"
            minWidth="229.555px"
          >
            <Typography
              color="#01A400"
              variant="p"
              sx={{ display: type === "Event Card" ? "block" : "none" }}
            >
              Available Today
            </Typography>
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                px: 2,
                py: 1,
                fontSize: "18px",
                // width: "229.555px"
                display: type === "Event Card" ? "block" : "none",
              }}
              onClick={openCalender}
            >
              Book FREE Event
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};
