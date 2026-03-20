import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import "./events-view.css";
interface Event {
  text: string;
  title: string;
}
import Footerbar from "../../components/footer/footer";
export default function EventsView() {
  const params = useParams();
  //  const [images, setImages] = useState([]);
  const [eventInfo, seteventInfo] = useState<Event>({
    text: "",
    title: "",
  });
  const [allimages, setallimages] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const details_fetch =
        "https://api.byd-film.de/v1/company/byd-film/veranstaltungen/details/" +
        params.id;
      const details = await fetch(details_fetch);
      const details_parsed = await details.json();
      setallimages(details_parsed.picture_names);
      seteventInfo({
        title: details_parsed.title,
        text: details_parsed.text,
      });
    }

    getDetails();
  }, []);
  console.log(eventInfo);
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="event-view-upper-part">
          <h1 className="event-view-title">{eventInfo.title}</h1>
          <p className="event-view-text"> {eventInfo.text}</p>
        </div>
        <div className="event-view-up">
          {allimages.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url("/pictures/veranstaltungen/${params.id}/${item}") no-repeat center /cover`,
                aspectRatio: 16 / 9,
              }}
            ></div>
          ))}
        </div>
      </div>
      <Footerbar></Footerbar>
    </>
  );
}
