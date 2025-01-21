import React from 'react';
import '../styles/globals.css'; // Import global CSS
import NavBar from '../components/NavBar'; // Import your navbar component
import Footer from '../components/Footer'; // Import your footer component

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <NavBar /> {/* Global Navigation Bar */}
      <Component {...pageProps} /> Render the page specific component
      <Footer /> {/* Global Footer */}
    </>
  );
};

export default MyApp;
