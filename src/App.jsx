import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import PropertyPage1 from "./pages/PropertyPage1";
import PropertyPage2 from "./pages/PropertyPage2";
import PropertyPage3 from "./pages/PropertyPage3";
import PropertyPage4 from "./pages/PropertyPage4";
import PropertyPage5 from "./pages/PropertyPage5";
import PropertyPage6 from "./pages/PropertyPage6";
import PropertyPage7 from "./pages/PropertyPage7";

import FavouritesProvider from "./context/FavouritesContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <HashRouter>
      <FavouritesProvider>

        <Navbar />

        <div className="page-container">
          <Routes>

            <Route path="/" element={<SearchPage />} />

            <Route path="/property/prop1" element={<PropertyPage1 />} />
            <Route path="/property/prop2" element={<PropertyPage2 />} />
            <Route path="/property/prop3" element={<PropertyPage3 />} />
            <Route path="/property/prop4" element={<PropertyPage4 />} />
            <Route path="/property/prop5" element={<PropertyPage5 />} />
            <Route path="/property/prop6" element={<PropertyPage6 />} />
            <Route path="/property/prop7" element={<PropertyPage7 />} />

          </Routes>
        </div>

      </FavouritesProvider>
    </HashRouter>
  );
}

export default App;
