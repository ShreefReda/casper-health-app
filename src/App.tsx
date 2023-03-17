import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListPage from "pages/listPage";
import DetailPage from "pages/detailPage";
import CombinedProvider from "contexts/CombinedProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <CombinedProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/patients/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CombinedProvider>
  );
};

export default App;
