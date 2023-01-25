import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RoutePages from "./router/RoutePages";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RoutePages />
  </StrictMode>
);
