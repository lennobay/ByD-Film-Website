import CollectionLimited from "../../components/collection/collection-limited";
import DeviderContact from "../../components/divider/contact";
import EventLimited from "../../components/event/event-limited";
import Footerbar from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import "./start.css";

export default function StartPage() {
  return (
    <>
      <Hero></Hero>
      <div className="rest">
        <div>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "white",
            }}
          >
            Veranstaltungen
          </h2>
          <EventLimited></EventLimited>
          <DeviderContact></DeviderContact>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              color: "white",
            }}
          >
            Kollektionen
          </h2>
          <CollectionLimited></CollectionLimited>
        </div>
      </div>
      <Footerbar></Footerbar>
    </>
  );
}
