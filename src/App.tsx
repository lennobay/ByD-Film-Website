import { Routes, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./pages/start/start";
import Collection from "./pages/collections/collection";
import CollectionView from "./pages/collections/collection-view";
import EventsAll from "./pages/events/events";
import EventsView from "./pages/events/events-view";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage></StartPage>} />
        <Route path="/collections" element={<Collection></Collection>} />
        <Route
          path="/collections/view/:id"
          element={<CollectionView></CollectionView>}
        />
        <Route
          path="/veranstaltungen"
          element={<EventsAll></EventsAll>}
        ></Route>
        <Route
          path="/veranstaltungen/view/:id"
          element={<EventsView></EventsView>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
