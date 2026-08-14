import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { App } from "./routes/App";

// CSS
import "./assets/css/index.css";

// LanguageProvider now lives inside App, under the Router — it reads the
// active language from the URL, which needs Router context to be present.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
