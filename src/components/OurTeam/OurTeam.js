import React from 'react';
import TeamMember from './TeamMember';

const ourTeam = (props) => {
  const members = props.team.map(member => <TeamMember
    key = {member.key}
    image = {member.key}
    name = {member.name}
    designation = {member.designation}
    description = {member.description}
  />
  );

  return(
    <section className="our_team_area">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>Our Team</h2>
                <h4>Meet our team</h4>
            </div>
            <div className="row team_row">
            {members}
            </div>
        </div>
    </section>)
}

export default ourTeam;
