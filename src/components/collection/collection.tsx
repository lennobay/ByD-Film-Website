import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import "./collection.css";

export default function CollectionAll() {
  const navigate = useNavigate();
  const [items, setitems] = useState<any[]>([]);
  useEffect(() => {
    async function getIds() {
      const res = await fetch(
        "http://localhost:8081/v1/company/byd-film/kollektionen/all",
      );
      const allinfo = [];
      const data = await res.json();
      for (let i = 0; i < data.ids.length; i++) {
        const details_fetch =
          "http://localhost:8081/v1/company/byd-film/kollektionen/details/" +
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
    <div className="collection-display">
      {items.map((item, info) => (
        <div
          onClick={() => navigate("/collections/view/" + item.id)}
          className="collection-sub"
          style={{
            background: `url("/pictures/kollektionen/${item.id}/thumbnail.jpg")  no-repeat center /cover`,
          }}
          key={item}
        >
          <h1 className="collection-text">{item.title}</h1>
        </div>
      ))}
    </div>
  );
}
