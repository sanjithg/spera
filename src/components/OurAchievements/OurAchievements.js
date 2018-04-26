import React from 'react';
import Achievement from './Achievement';

const ourAchievements = (props) => {
  const achievement = props.achievements.map(achievement => <Achievement key = {props.key} {...achievement}/>)
  return (
    <section className="our_achievments_area" data-stellar-background-ratio="0.3">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>Our Achievement</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
            </div>
            <div className="achievments_row row">
                {achievement}
            </div>
        </div>
    </section>
  )
};

export default ourAchievements;
