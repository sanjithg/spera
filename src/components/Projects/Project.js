import React from 'react';

const service = (props) => (
   <div className="single_facilities col-xs-4 p0">
      <div className="single_facilities_inner">
           <img src={require("../../assets/images/Gallery/sv-"+props.image+".jpg")} alt=""/>
           <div className="gallery_hover">
               <h4>{props.heading}</h4>
               <ul>
                   <li><a href="#"><i className="fa fa-link" aria-hidden="true"></i></a></li>
                   <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
               </ul>
           </div>
       </div>
   </div>
);

export default service;
