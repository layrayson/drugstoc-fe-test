import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BooksLayout from "./components/layouts/BooksLayout";
import SigleBookDetailsPage from "./pages/SingleBookDetailsPage";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
