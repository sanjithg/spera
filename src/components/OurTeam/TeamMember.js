import React from 'react';

const teamMember = (props) => (
  <div className="col-md-3 col-sm-6 wow fadeInUp">
     <div className="team_membar">
          <img src={require("../../assets/images/ourTeam/tm-"+props.image+".png")} alt=""/>
          <div className="team_content">
              <ul>
                  <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
              <a href="#" className="name">{props.name}</a>
              <h6>{props.designation}</h6>
          </div>
     </div>
  </div>
)

export default teamMember;
