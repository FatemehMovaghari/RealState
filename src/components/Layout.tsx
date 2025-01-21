import React from "react";
import Navbar from './NavBar';
import Footer from './Footer';


const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar is included here */}
      <main>{children}</main> {/* This will render the child components */}
      <Footer/>
    </div>
  );
};

export default Layout;
