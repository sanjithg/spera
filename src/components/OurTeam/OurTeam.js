import React from 'react';
import TeamMember from './TeamMember';

const ourTeam = (props) => {
  const members = props.team.map(member => <TeamMember
    key = {member.key}
    image = {member.key}
  />
  );

  return(
    <section className="our_team_area">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>Our Team</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
            </div>
            <div className="row team_row">
            {members}
            </div>
        </div>
    </section>)
}

export default ourTeam;
