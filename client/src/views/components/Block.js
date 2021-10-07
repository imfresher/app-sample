import React from 'react';

export default function Block({ title, className, children, ...props }) {
  return  (
    <div className={className ? `Block ${className}` : "Block"} {...props}>
      { title ? (<span className="Block__title">{ title }</span>) : '' }
      <div className="Block__content">
        { children }
      </div>
    </div>
  );
}
