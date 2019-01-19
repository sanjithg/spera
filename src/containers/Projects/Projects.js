import React, { Component } from 'react';
import Banner from '../../components/Banner';
import OurProjects from '../../components/Projects/OurProjects';

class Projects extends Component {
  getProjectsObject() {
    return({
      completed : [
        {
          "Client" : 'GVR Infra Projects Limited',
          "status": "100%",
          "desc": "Rehabilitation and upgradation of Nakrekal to Nagarjunasagar section of NH-565 from km 1+000 to Km 86+057 in the state of Telangana (Formerly Andhra Pradesh) to two lane with paved shoulder under NHDP – IV through EPC basis contract.",
          "scope": "Preparation of complete highway and structural designs and attaining the approval from the AE/IE",
          "date" : "June 5th 2018",
          "image" : "cns-1.jpg",
          "key" : 1
        },
        {
          "Client" : 'BSCPL Infrastructure Limited',
          "status": "100%",
          "desc": "Rehabilitation and Upgradation of NH-67 from km 695/000 to Km 741/950 (Atmakur to Nellore section) with two lane Paved shoulder in the state of Andhra Pradesh under NHDP –IV through Engineering, Procurement & Construction (EPC) basis contract.",
          "scope": "Complete structural design and approval from the AE/IE and Part of Highway design and drawings, Junction drawings.",
          "date" : "June 5th 2018",
          "image" : "cns-2.jpg",
          "key" : 2
        },
        {
          "Client" : 'Ramky Infrastructure Ltd.',
          "status": "100%",
          "desc": "Design Rehabilitation, Strengthening and four laning of Srinagar to Banihal section from Km 187+000 to Km 189+350 (Banihal Bypass) and Km 220+700 to Km 286+110 of NH-1A on BOT basis in the state of Jammu & Kashmir.",
          "scope": "Preparation of Detailed design and drawings of Major and Minor Bridges and getting the approval of Independent Engineer",
          "date" : "June 5th 2018",
          "image" : "cns-3.jpg",
          "key" : 3
        },
        {
          "Client" : 'HKR Roadways Limited (Gayathri Projects Limited)',
          "status": "100%",
          "desc": "Preparation of detailed design and drawings for the ROB at Km 210+750 in the stretch of Hyderabad – karimnagar – Ramagundam in the state of Telangana.",
          "scope": "-",
          "date" : "June 5th 2018",
          "image" : "cns-1.jpg",
          "key" : 4
        }
      ],
      onGoing : [
        {
          "Client" : 'IJM (India) Infra structure Limited',
          "status": "-",
          "desc": "Widening & Upgradation of Dewas road from km0+000 to Ujjain in Dewas Jn. And ends at km 19+800 of Indore Jn. To 4/6 laning in the state of Madhya Pradesh",
          "date" : "June 5th 2018",
          "image" : "cns-1.jpg",
          "key" : 1
        },
        {
          "Client" : 'KMC Constructions Pvt Ltd, In Association with Dhruta Designs',
          "status": "75%",
          "desc": "Preparation of detailed design and drawings of structures for Four Laning of Ner Chowk Pandoh Section of NH-21 (Package-I Km 190+000 to Km 215+000) under NHDP-IVB on EPC Mode in the state of Himachal Pradesh (Design Length-26Km).",
          "date" : "June 5th 2018",
          "image" : "cns-2.jpg",
          "key" : 2
        },
        {
          "Client" : 'SRK Projects, In Association with Design Aid.',
          "status": "-",
          "desc": "Preparation of detailed design and drawings of structures two lane with paved shoulders of Kalwakurthi (nh-765 junction start) to Mallepally section from km 67.000 to km 114.205 in the state of Telangana",
          "date" : "June 5th 2018",
          "image" : "cns-3.jpg",
          "key" : 3
        },
        {
          "Client" : 'Madhucon Projects, Association with Meltech.',
          "status": "100%",
          "desc": "Preparation of  Detailed Design of structures for the widening of Two/Four lane with paved shoulder from Km 180+600 to Km 223+000 of NH-63 on Nizamabad – Jagadalpur Road on EPC mode under NH(O) in the State of Telangana.",
          "date" : "June 5th 2018",
          "image" : "cns-1.jpg",
          "key" : 4
        },
        {
          "Client" : 'Rithvik Project, In Association with I2R.',
          "status": "50%",
          "desc": "Preparation of detailed design and drawings for the structures for the Rehabilitation and Up-gradation of Jintur to Parbhani from Km. 47/000 to Km. 85/420 (Section II) of – Watur – Phata – Mantha – Jintur – Bori – Zari - Parbhani National Highway to two lane with paved shoulder in the state of Maharashtra on EPC mode",
          "date" : "June 5th 2018",
          "image" : "cns-2.jpg",
          "key" : 5
        },
        {
          "Client" : 'Rithvik Project, Association with I2R.',
          "status": "75%",
          "desc": "Rehabilitation and Up-gradation of Shirod Shahpur - Vasmat section from Km  50/600 to Km 70/430 (Section II) of Jintur – Aundha Nagnath – Shirod – Shahpur – Vasmat  National Highway to Two lane with paved shoulder in the state of Maharashtra on EPC mode.",
          "date" : "June 5th 2018",
          "image" : "cns-3.jpg",
          "key" : 6
        },
        {
          "Client" : 'GVR Infra Projects Ltd.',
          "status": "40%",
          "desc": "Rehabilitation and Up gradation of Ambikapur – Pathalgaon section of NH-78 from Km 373+505 (existing chainage 373+505) to Km 469+300 (existing chainage 468+800) to 2 lane with paved shoulders in the state of Chhattisgarh under NHDP-IV on EPC basis.",
          "date" : "June 5th 2018",
          "image" : "cns-1.jpg",
          "key" : 7
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
        link: "/projects/"+this.props.type,
        text: "Projects/"+this.props.type,
        active: "active"
      }
    ])
  };

  render() {
    return (
      <div>
        <Banner links = {this.getLinkObject()}/>
        <OurProjects projects = {this.getProjectsObject()[this.props.type]}/>
      </div>
    );
  }
}

export default Projects;
