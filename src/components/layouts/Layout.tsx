import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="font-nunito">{children}</div>;
};

export default Layout;
