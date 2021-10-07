import React from 'react';

class BackendLayout extends React.Component {
  render() {
    const { children, className, ...rest } = this.props;
    return (
      <div className={className ? `BackendLayout ${className}` : 'BackendLayout'}>
        <header id="AppHeader" className="AppHeader">
          Header
        </header>
        <main id="AppMain" className="AppMain">
          <div className="AppContent">
            { children }
          </div>
        </main>
        <footer id="AppFooter" className="AppFooter">
          Footer
        </footer>
      </div>
    );
  }
}

export default BackendLayout;
