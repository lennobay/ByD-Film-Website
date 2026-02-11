import CollectionAll from "../../components/collection/collection";
import Navbar from "../../components/navbar/navbar";
import "./collection.css";
export default function Collection() {
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="rest">
        <h2 className="collection-header">Kollektionen</h2>
        <CollectionAll />
      </div>
    </>
  );
}
