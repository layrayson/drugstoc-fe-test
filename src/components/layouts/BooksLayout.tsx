import React from "react";
import NavBar from "../shared/NavBar/NavBar";

const BooksLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default BooksLayout;
