import React from 'react';
import Header from '../frontend/_partial/Header';
import Footer from '../frontend/_partial/Footer';
// import Sidebar from '../frontend/_partial/Sidebar';

function FrontendLayout(props) {
  const { children, className } = props;

  return (
    <div className={className ? `FrontendLayout ${className}` : 'FrontendLayout'}>
      {/* <Sidebar /> */}
      <div className="AppContainer">
        <Header />
        <main id="AppMain" className="AppMain">
          <div className="AppContent py-5">
            { children }
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default FrontendLayout;
