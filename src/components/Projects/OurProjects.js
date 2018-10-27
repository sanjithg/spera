import React from 'react';

const ourProjects = (props) => {  
   const completedProjects = props.projects.completed.map(project => {
    return(
      <div key={project}>        
        <div className="location">
          <div className="location_laft">
            <a href="#"><b>Client</b></a>
            <a href="#"><b>Status</b></a>
            <a href="#"><b>Scope</b></a>
          </div>
          <div className="address">
            <a href="#">{project.Client}</a>
            <a href="#">{project.Percentage_of_Work_Completed}</a>
            <a href="#">{project.Scope_of_Work}</a>
          </div>
        </div>
        <p>{project.Description}</p>
        <hr/>        
      </div>
    );
  });

  const onGoingProjects = props.projects.onGoing.map(project => {
    return(
      <div key={project}>        
        <div className="location">
          <div className="location_laft">
            <a href="#"><b>Client</b></a>
            <a href="#"><b>Status</b></a>
          </div>
          <div className="address">
            <a href="#">{project.Client}</a>
            <a href="#">{project.Percentage_of_Work_Completed}</a>            
          </div>
        </div>
        <p>{project.Description}</p>
        <hr/>
      </div>
    );
  });

  

  return (

    <section className="all_contact_info">
      <div className="container">
          <div className="row contact_row">
              <div className="col-sm-6 contact_info">
                  <h2>Completed Projects</h2>                 
                  {completedProjects}
              </div>
              <div className="col-sm-6 contact_info">
                  <h2>Ongoing Projects</h2>
                  {onGoingProjects}
              </div>              
          </div>
      </div>
  </section>
        
  )
};

export default ourProjects;
