import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BooksLayout from "./components/layouts/BooksLayout";
import SigleBookDetailsPage from "./pages/SingleBookDetailsPage";
import RTQueryClient from "./components/wrappers/RTQQueryClient";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <RTQueryClient>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/books/*"
              element={
                <Routes>
                  <Route path="/" element={<BooksPage />} />
                  <Route path=":bookId" element={<SigleBookDetailsPage />} />
                </Routes>
              }
            />
          </Routes>
        </RTQueryClient>
      </Layout>
    </Router>
  );
}

export default App;
