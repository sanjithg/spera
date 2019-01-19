import React from 'react';

const service = (props) => {
  let str = props.desc;
  const strLen = props.desc.length;
  if (strLen > 180) {
    str = str.substring(0, 180) + "..."
  };

  return(<div className="col-md-4 col-sm-6">
      <div className="renovation">
          <img src={require("../../assets/images/projects/"+props.image)} alt=""/>
          <div className="renovation_content">
              <a className="clipboard"><i className="fa fa-clipboard" aria-hidden="true"></i></a>
              <a className="tittle">{props.Client}</a>
              <div className="date_comment">
                <a><i className="fa fa-calendar" aria-hidden="true"></i>{props.date}</a>
                <a><i className="fa fa-cogs" aria-hidden="true"></i>Status: {props.status}</a>
              </div>
              <div className='proj-desc'>
                <p>{str}</p>
              </div>
          </div>
      </div>
  </div>)
};

export default service;
