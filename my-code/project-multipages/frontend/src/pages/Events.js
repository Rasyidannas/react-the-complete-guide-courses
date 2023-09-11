import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();//this will load data "loader" in app.js

  return <EventsList events={events} />;
}

export default EventsPage;
