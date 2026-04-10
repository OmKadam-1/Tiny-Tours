import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./views/Contact.jsx";
import Dashboard from "./views/Dashboard.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    
    </Routes>
  </BrowserRouter>,
);
