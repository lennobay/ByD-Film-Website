import Navbar from "../../components/navbar/navbar";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import "./events-view.css";
export default function EventsView() {
  const params = useParams();
  const [images, setImages] = useState([]);
  const [eventInfo, seteventInfo] = useState({});
  const allimages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  useEffect(() => {
    async function getDetails() {
      const details_fetch =
        "http://localhost:8081/v1/company/byd-film/veranstaltungen/details/" +
        params.id;
      const details = await fetch(details_fetch);
      const details_parsed = await details.json();

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
    </>
  );
}
