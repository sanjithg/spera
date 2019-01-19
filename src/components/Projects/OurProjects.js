import React from 'react';
import Project from './Project';

const ourProjects = (props) => {
  const projects = props.projects.map((p) => <Project {...p} />);

  return (
    <section className="blog_tow_area">
      <div className="container">
         <div className="row blog_tow_row">
          {projects}
         </div>
      </div>
  </section>)
};

export default ourProjects;
