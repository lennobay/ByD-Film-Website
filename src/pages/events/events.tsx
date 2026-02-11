import EventDisplay from "../../components/event/event";
import Navbar from "../../components/navbar/navbar";
import "./events.css";

export default function EventsAll() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="page-title">Veranstaltungen</h1>
        <EventDisplay></EventDisplay>
      </div>
    </>
  );
}
