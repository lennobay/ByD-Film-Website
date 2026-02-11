import { useParams } from "react-router";
import Navbar from "../../components/navbar/navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./collection-view.css";
export default function CollectionView() {
  const navigate = useNavigate();
  const params = useParams();
  const [collectionInfo, setcollectionInfo] = useState({});
  const [images, setImages] = useState([]);

  const allimages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  useEffect(() => {
    async function getDetails() {
      const details_fetch =
        "http://localhost:8081/v1/company/byd-film/kollektionen/details/" +
        params.id;
      const details = await fetch(details_fetch);
      const details_parsed = await details.json();

      setcollectionInfo({
        title: details_parsed.title,
      });
    }

    getDetails();
  }, []);
  console.log(collectionInfo);
  if (collectionInfo.title == undefined) {
    navigate("/collections");
  } else {
    return (
      <>
        <Navbar></Navbar>
        <div>
          <h1 className="collection-view-title">{collectionInfo.title}</h1>
          <div className="collection-view-up">
            {allimages.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url("/pictures/kollektionen/${params.id}/${item}") no-repeat center /cover`,
                  aspectRatio: 16 / 9,
                }}
              ></div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
