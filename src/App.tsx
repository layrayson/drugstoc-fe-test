import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BooksLayout from "./components/layouts/BooksLayout";
import SigleBookDetailsPage from "./pages/SingleBookDetailsPage";
import RTQueryClient from "./components/wrappers/RTQQueryClient";

function App() {
  return (
    <Router>
      <RTQueryClient>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/books/*"
            element={
              <BooksLayout>
                <Routes>
                  <Route path="/" element={<BooksPage />} />
                  <Route path=":id" element={<SigleBookDetailsPage />} />
                </Routes>
              </BooksLayout>
            }
          />
        </Routes>
      </RTQueryClient>
    </Router>
  );
}

export default App;
