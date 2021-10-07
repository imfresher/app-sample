import React from 'react';
import { FormattedMessage } from 'react-intl';
import { secondsToLabel, timeSince } from 'utils/LocaleUtil';
import { viewsLabel } from 'utils/VideoUtil';

export default function VideoItem(props) {
  const { video } = props;

  return (
    <div className="Video card mb-4">
      <div className="Video__media card-media">
        <a href={ `/watch/${video.id}?v=${video.code}` }>
          <img src={ video.thumbnail } alt={ video.title } />
        </a>
        <small className="Video__time">{ secondsToLabel(video.time) }</small>
      </div>
      <div className="card-body">
        <h3 className="Video__title">
          <a href={ `/watch/${video.id}?v=${video.code}` }>{ video.title }</a>
        </h3>
        <div className="d-flex justify-content-between align-items-center">
          <div className="group">
            <div className="Video__views">{ viewsLabel(video.views) } <FormattedMessage id="common.views" /></div>
            <div className="Video__author">{ video.author.name }</div>
          </div>
          <small className="text-muted">{ timeSince(video.created_at) } <FormattedMessage id="common.ago" /></small>
        </div>
      </div>
    </div>
  );
}