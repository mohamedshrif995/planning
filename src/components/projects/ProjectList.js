import React from 'react';
import ProjectSummry from './ProjectSummry'
const ProjectList = ({Projects}) => {
    const Projectss=Projects&&Projects.map(project=>{
       return(
           <ProjectSummry project={project} key={project.id}/>
       )
    })
    return (
        <div className="project-list section">
          
      {Projectss}

          
        </div>
    );
}

export default ProjectList;