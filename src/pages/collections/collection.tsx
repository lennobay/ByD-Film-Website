import { Suspense } from "react";
import CollectionAll from "../../components/collection/collection";
import Footerbar from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./collection.css";
import Loading from "../../components/loading/loading";
export default function Collection() {
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="rest">
          <h2 className="collection-header">Kollektionen</h2>
          <CollectionAll />
        </div>
        <Footerbar></Footerbar>
      </Suspense>
    </>
  );
}
