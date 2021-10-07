import React from 'react';
import RelatedVideos from './RelatedVideos';

export default function WatchSidebar({ className, ...props }) {
  return (
    <aside className={className ? `Watch__Sidebar ${className}` : 'Watch__Sidebar'} { ...props }>
      <RelatedVideos />
    </aside>
  );
}
