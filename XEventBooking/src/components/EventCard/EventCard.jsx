import { Box } from "@mui/material";
import Card from "./Card";

export default function EventCard({ type, event }) {
  return (
    <article>
      <Box bgcolor="white" p={3} borderRadius={3}>
        <Card type={type} event={event} />
      </Box>
    </article>
  );
}
