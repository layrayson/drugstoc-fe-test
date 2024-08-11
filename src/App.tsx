import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import SigleBookDetailsPage from "./pages/SingleBookDetailsPage";
import RTQueryClient from "./components/wrappers/RTQQueryClient";
import Layout from "./components/layouts/Layout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Layout>
        <ToastContainer />
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
