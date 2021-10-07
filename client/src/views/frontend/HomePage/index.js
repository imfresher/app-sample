import React from 'react';
import { FormattedMessage } from 'react-intl';
import FrontendLayout from 'views/layouts/FrontendLayout';
import VideoItem from './VideoItem';
import { videos } from 'services/fake';

function HomePage(props) {
  const videoListRender = videos.map((video, index) => {
    return (
      <div className="col-xl-2 col-lg-3 col-md-2" key={ video.id }>
        <VideoItem video={video} />
      </div>
    );
  });

  return (
    <FrontendLayout>
      {/* <h1><FormattedMessage id="HomePage.title" /></h1>
      <p><FormattedMessage id="doc.Lifecycle.text" /></p> */}
      <div className="VideoList px-5">
        <div className="container-fluid">
          <h1><FormattedMessage id="HomePage.title" /></h1>
          <div className="row">
            { videoListRender }
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}

export default HomePage;
