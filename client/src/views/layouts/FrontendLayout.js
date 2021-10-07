import React from 'react';
// import { Button } from 'react-bootstrap';
import Header from '../frontend/_partial/Header';
import Footer from '../frontend/_partial/Footer';
// import Sidebar from '../frontend/_partial/Sidebar';

class FrontendLayout extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={className ? `FrontendLayout ${className}` : 'FrontendLayout'}>
        {/* <Sidebar /> */}
        <div className="AppContainer">
          <Header />
          {/* <div className="px-5">
            <div className="tags container-fluid py-3">
              <Button variant="success" size="sm">Awesome</Button>{' '}
              <Button variant="success" size="sm">Trending Music</Button>{' '}
              <Button variant="success" size="sm">Top Music</Button>{' '}
              <Button variant="success" size="sm">8x & 9x</Button>{' '}
              <Button variant="success" size="sm">Film</Button>{' '}
              <Button variant="success" size="sm">The Best</Button>{' '}
              <Button variant="success" size="sm">Crazy</Button>{' '}
              <Button variant="success" size="sm">Easy</Button>{' '}
              <Button variant="success" size="sm">Clip</Button>{' '}
              <Button variant="success" size="sm">Watch</Button>{' '}
              <Button variant="success" size="sm">Hee</Button>{' '}
              <Button variant="success" size="sm">Hello world</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
              <Button variant="success" size="sm">reactjs</Button>{' '}
            </div>
          </div> */}
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
}

export default FrontendLayout;
