import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Banner from '../../components/Banner';
import ProjectsHeader from '../../components/Projects/ProjectsHeader';
import Projects from '../../components/Projects/Projects';

class Projects extends Component {
  state = {
    projects: [
      {
        completed : {
          active : true,
          text: "Completed"
        },
        onGoing : {
          active : false,
          text: "On Going"
        }
      }
    ]
  };

  getProjectsObject() {
    return({
      completed : [
        {
          "Client" : 'GVR Infra Projects Limited',
          "Percentage_of_Work_Completed": "100%",
          "Description": "Rehabilitation and upgradation of Nakrekal to Nagarjunasagar section of NH-565 from km 1+000 to Km 86+057 in the state of Telangana (Formerly Andhra Pradesh) to two lane with paved shoulder under NHDP – IV through EPC basis contract."
        }
      ],
      onGoing : [
        {
          "Client" : 'KMC Constructions Pvt Ltd, In Association with Dhruta Designs.',
          "Percentage_of_Work_Completed": "75%",
          "Description": "Preparation of detailed design and drawings of structures for Four Laning of Ner Chowk Pandoh Section of NH-21 (Package-I Km 190+000 to Km 215+000) under NHDP-IVB on EPC Mode in the state of Himachal Pradesh (Design Length-26Km)."
        }
      ]
    })
  };

  getLinkObject() {
    return([
      {
        link: "/home",
        text: "Home",
        active: ""
      },
      {
        link: "/projects",
        text: "Projects",
        active: "active"
      }
    ])
  };

  render() {
    return (
            <Aux>
              <Banner links = {this.getLinkObject()}/>
              <ProjectsHeader projects = {this.state.projects} />
              <Projects projects = {this.getProjectsObject()}/>
            </Aux>
    );
  }
}

export default Projects;
