import { Suspense } from "react";
import EventDisplay from "../../components/event/event";
import Navbar from "../../components/navbar/navbar";
import "./events.css";
import Loading from "../../components/loading/loading";
import Footerbar from "../../components/footer/footer";

export default function EventsAll() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <Navbar></Navbar>
        <div>
          <h1 className="page-title">Veranstaltungen</h1>
          <EventDisplay></EventDisplay>
        </div>
        <Footerbar></Footerbar>
      </Suspense>
    </>
  );
}
