import React from 'react';

const projectsHeader = (props) => (
   <div className="single_facilities col-xs-4 p0">
      <div className="single_facilities_inner">

           <div className="gallery_hover">
               <h4>{props.heading}</h4>
               <ul>
                   <li><i className="fa fa-link" aria-hidden="true"></i></li>
                   <li><i className="fa fa-search" aria-hidden="true"></i></li>
               </ul>
           </div>
       </div>
   </div>
);

export default projectsHeader;
