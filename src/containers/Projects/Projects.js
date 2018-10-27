import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Banner from '../../components/Banner';
import ProjectsHeader from '../../components/Projects/ProjectsHeader';
import OurProjects from '../../components/Projects/OurProjects';

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
          "Description": "Rehabilitation and upgradation of Nakrekal to Nagarjunasagar section of NH-565 from km 1+000 to Km 86+057 in the state of Telangana (Formerly Andhra Pradesh) to two lane with paved shoulder under NHDP – IV through EPC basis contract.",
          "Scope_of_Work": "Preparation of complete highway and structural designs and attaining the approval from the AE/IE"
        },
        {
          "Client" : 'BSCPL Infrastructure Limited',
          "Percentage_of_Work_Completed": "100%",
          "Description": "Rehabilitation and Upgradation of NH-67 from km 695/000 to Km 741/950 (Atmakur to Nellore section) with two lane Paved shoulder in the state of Andhra Pradesh under NHDP –IV through Engineering, Procurement & Construction (EPC) basis contract.",
          "Scope_of_Work": "Complete structural design and approval from the AE/IE and Part of Highway design and drawings, Junction drawings."
        },
        {
          "Client" : 'Ramky Infrastructure Ltd.',
          "Percentage_of_Work_Completed": "100%",
          "Description": "Design Rehabilitation, Strengthening and four laning of Srinagar to Banihal section from Km 187+000 to Km 189+350 (Banihal Bypass) and Km 220+700 to Km 286+110 of NH-1A on BOT basis in the state of Jammu & Kashmir.",
          "Scope_of_Work": "Preparation of Detailed design and drawings of Major and Minor Bridges and getting the approval of Independent Engineer"
        },
        {
          "Client" : 'HKR Roadways Limited (Gayathri Projects Limited)',
          "Percentage_of_Work_Completed": "100%",
          "Description": "Preparation of detailed design and drawings for the ROB at Km 210+750 in the stretch of Hyderabad – karimnagar – Ramagundam in the state of Telangana.",
          "Scope_of_Work": "-"
        }
      ],
      onGoing : [
        {
          "Client" : 'IJM (India) Infra structure Limited',
          "Percentage_of_Work_Completed": "-",
          "Description": "Widening & Upgradation of Dewas road from km0+000 to Ujjain in Dewas Jn. And ends at km 19+800 of Indore Jn. To 4/6 laning in the state of Madhya Pradesh"
        },
        {
          "Client" : 'KMC Constructions Pvt Ltd, In Association with Dhruta Designs',
          "Percentage_of_Work_Completed": "75%",
          "Description": "Preparation of detailed design and drawings of structures for Four Laning of Ner Chowk Pandoh Section of NH-21 (Package-I Km 190+000 to Km 215+000) under NHDP-IVB on EPC Mode in the state of Himachal Pradesh (Design Length-26Km)."
        },
        {
          "Client" : 'SRK Projects, In Association with Design Aid.',
          "Percentage_of_Work_Completed": "-",
          "Description": "Preparation of detailed design and drawings of structures two lane with paved shoulders of Kalwakurthi (nh-765 junction start) to Mallepally section from km 67.000 to km 114.205 in the state of Telangana"
        },
        {
          "Client" : 'Madhucon Projects, Association with Meltech.',
          "Percentage_of_Work_Completed": "100%",
          "Description": "Preparation of  Detailed Design of structures for the widening of Two/Four lane with paved shoulder from Km 180+600 to Km 223+000 of NH-63 on Nizamabad – Jagadalpur Road on EPC mode under NH(O) in the State of Telangana."
        },
        {
          "Client" : 'Rithvik Project, In Association with I2R.',
          "Percentage_of_Work_Completed": "50%",
          "Description": "Preparation of detailed design and drawings for the structures for the Rehabilitation and Up-gradation of Jintur to Parbhani from Km. 47/000 to Km. 85/420 (Section II) of – Watur – Phata – Mantha – Jintur – Bori – Zari - Parbhani National Highway to two lane with paved shoulder in the state of Maharashtra on EPC mode"
        },
        {
          "Client" : 'Rithvik Project, Association with I2R.',
          "Percentage_of_Work_Completed": "75%",
          "Description": "Rehabilitation and Up-gradation of Shirod Shahpur - Vasmat section from Km  50/600 to Km 70/430 (Section II) of Jintur – Aundha Nagnath – Shirod – Shahpur – Vasmat  National Highway to Two lane with paved shoulder in the state of Maharashtra on EPC mode."
        },
        {
          "Client" : 'GVR Infra Projects Ltd.',
          "Percentage_of_Work_Completed": "40%",
          "Description": "Rehabilitation and Up gradation of Ambikapur – Pathalgaon section of NH-78 from Km 373+505 (existing chainage 373+505) to Km 469+300 (existing chainage 468+800) to 2 lane with paved shoulders in the state of Chhattisgarh under NHDP-IV on EPC basis."
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
              <OurProjects projects = {this.getProjectsObject()}/>
            </Aux>
    );
  }
}

export default Projects;
