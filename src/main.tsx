import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import Loading from "./components/loading/loading.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loading />}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>,
);
