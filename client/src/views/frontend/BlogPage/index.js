import React from 'react';
import FrontendLayout from 'views/layouts/FrontendLayout';

function BlogPage(props) {
  return (
    <FrontendLayout>
      <div className="BlogPage px-5">
        <div className="BlogPage__container container-fluid">
          <div className="row">
            <section id="Blog__content" className="col-8">

            </section>
          </div>
        </div>
      </div>
    </FrontendLayout>
  );
}

export default BlogPage;
