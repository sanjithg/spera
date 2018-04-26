import React from 'react';

const independentComponent = (props) => (
    <div className="col-md-4 col-sm-6 construction">
       <div className="cns-img">
            <img src={require("../../assets/images/whatWeOffer/cns-"+props.image+".jpg")} alt=""/>
       </div>
       <div className="cns-content">
            <i className={props.icon} aria-hidden="true"></i>
            <a href="#">{props.heading}</a>
            <p>{props.description}</p>
       </div>
    </div>
);

export default independentComponent;
