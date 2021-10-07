import React from 'react';
import { FormattedMessage } from 'react-intl';
import { secondsToLabel, timeSince } from 'utils/LocaleUtil';
import { viewsLabel } from 'utils/VideoUtil';
import { videos } from 'services/fake';

export default function RelatedVideos({ className, children, ...props }) {
  return (
    <div className="Related__Videos VideoList">
      { videos.map(video => (
        <div className="Video card mb-3 pb-3" key={ video.id }>
          <div className="row no-gutters">
            <div className="Video__media card-media col-md-4">
              <a href={ `/watch/${video.id}?v=${video.code}` }>
                <img src={ video.thumbnail } alt={ video.title } />
              </a>
              <small className="Video__time">{ secondsToLabel(video.time) }</small>
            </div>
            <div className="col-md-8">
              <div className="card-body p-0 pl-2">
                <h4 className="Video__title">
                  <a href={ `/watch/${video.id}?v=${video.code}` }>{ video.title }</a>
                </h4>
                <div className="d-flex justify-content-between align-items-end">
                  <div className="group">
                    <div className="Video__views">{ viewsLabel(video.views) } <FormattedMessage id="common.views" /></div>
                    <div className="Video__author">{ video.author.name }</div>
                  </div>
                  <small className="text-muted">{ timeSince(video.created_at) } <FormattedMessage id="common.ago" /></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}
