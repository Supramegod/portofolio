import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import { App } from "./routes/App";

// CSS
import "./assets/css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <meta
          name="google-site-verification"
          content="SX_JH7N2X8iCyiarAJ5IJAsGaCI0_nGVpp6EO5UwQbI"
        />
      </Helmet>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
);
