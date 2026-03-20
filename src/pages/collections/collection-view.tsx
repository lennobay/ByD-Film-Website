import { useParams } from "react-router";
import Navbar from "../../components/navbar/navbar";
import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./collection-view.css";
import Footerbar from "../../components/footer/footer";
import Loading from "../../components/loading/loading";

interface Collection {
  title: string;
}
export default function CollectionView() {
  const navigate = useNavigate();
  const params = useParams();
  const [collectionInfo, setcollectionInfo] = useState<Collection>({
    title: "",
  });
  // const [images, setImages] = useState([]);

  const [allimages, setallimages] = useState<string[]>([]);
  useEffect(() => {
    async function getDetails() {
      const details_fetch =
        "https://api.byd-film.de/v1/company/byd-film/kollektionen/details/" +
        params.id;
      const details = await fetch(details_fetch);
      const details_parsed = await details.json();
      if (details_parsed.picture_names == null) {
        setallimages(["/notfound.jpg"]);
      } else {
        setallimages(details_parsed.picture_names);
      }

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
        <Suspense fallback={<Loading></Loading>}>
          <Navbar></Navbar>
          <div>
            <h1 className="collection-view-title">{collectionInfo.title}</h1>
            <div className="collection-view-up">
              {allimages.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: ` url("https://pictures.byd-film.de/kollektionen/${params.id}/${item}") no-repeat center /cover`,
                    aspectRatio: 16 / 9,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <Footerbar></Footerbar>
        </Suspense>
      </>
    );
  }
}
