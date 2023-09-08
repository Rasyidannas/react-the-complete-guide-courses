import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

function EventRootlayout() {
    return <>
        <EventsNavigation/>
        <Outlet />
    </>
}

export default EventRootlayout;