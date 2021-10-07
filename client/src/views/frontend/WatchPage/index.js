import React from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { secondsToLabel, timeSince } from 'utils/LocaleUtil';
import { viewsLabel } from 'utils/VideoUtil';
import FrontendLayout from 'views/layouts/FrontendLayout';
import VideoPlayer from 'views/components/VideoPlayer';
import WatchSidebar from 'views/frontend/_partial/WatchSidebar';
import { videos } from 'services/fake';

function WatchPage(props) {
  const params = useParams();
  const id = parseInt(params.id) - 1 || 0;
  const video = videos[id];

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    fluid: true,
    controlBar: {
      volumePanel: { inline: false },
      children: [
        "playToggle",
        "volumePanel",
        "currentTimeDisplay",
        "timeDivider",
        "durationDisplay",
        "progressControl",
        "liveDisplay",
        "remainingTimeDisplay",
        "customControlSpacer",
        "playbackRateMenuButton",
        "chaptersButton",
        "descriptionsButton",
        "subsCapsButton",
        "audioTrackButton",
        "chromeCastButton",
        "resolutionButton",
        // "settingMenuButton",
        "pictureInPictureToggle",
        "fullscreenToggle"
      ]
    },
    poster: video.thumbnail,
    sources: [
      {
        src: video.src || '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };

  return (
    <FrontendLayout>
      <div className="WatchPage px-5">
        <div className="WatchPage__container container-fluid">
          <div className="row">
            <section id="Watch__content" className="col-8">
              {/* <h1><FormattedMessage id="WatchPage.title" /></h1>
              <p><FormattedMessage id="doc.Lifecycle.text" /></p> */}

              <div className="Video">
                <VideoPlayer {...videoJsOptions} />
                <h3 className="mt-2">{ video.title }</h3>
                <small className="Video__time">{ secondsToLabel(video.time) }</small>
                <p className="mt-2">{ video.description }</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="group">
                    <p>{ viewsLabel(video.views) } <FormattedMessage id="common.views" /></p>
                    <span>{ video.author.name }</span>
                  </div>
                  <small className="text-muted">{ timeSince(video.created_at) } <FormattedMessage id="common.ago" /></small>
                </div>
              </div>
            </section>

            <WatchSidebar className="col-4"/>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}

export default WatchPage;
