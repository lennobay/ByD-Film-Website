import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./event.css";
export default function EventLimited() {
  const navigate = useNavigate();
  const [items, setitems] = useState<any[]>([]);
  useEffect(() => {
    async function getIds() {
      const res = await fetch(
        "https://api.byd-film.de/v1/company/byd-film/veranstaltungen/latest",
      );
      const allinfo = [];
      const data = await res.json();
      for (let i = 0; i < data.ids.length; i++) {
        const details_fetch =
          "https://api.byd-film.de/v1/company/byd-film/veranstaltungen/details/" +
          data.ids[i];
        const details = await fetch(details_fetch);
        const details_parsed = await details.json();

        allinfo.push(details_parsed);
      }
      setitems(allinfo);
    }
    getIds();
  }, []);
  console.log(items);
  return (
    <div className="event-display">
      {items.map((item, info) => (
        <div
          key={info}
          onClick={() => navigate("/veranstaltungen/view/" + item.id)}
        >
          <div
            className="event-sub"
            style={{
              background: `url("https://pictures.byd-film.de/veranstaltungen/${item.id}/thumbnail.jpg")  no-repeat center /cover`,
              aspectRatio: 16 / 9,
            }}
            key={item}
          ></div>
          <h1 className="event-text">{item.title}</h1>
          <p className="event-disc">{item.thumbnail_description}</p>
        </div>
      ))}
    </div>
  );
}
