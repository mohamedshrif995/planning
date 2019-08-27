import React from 'react';
const ProjectSummry=({project})=>{
    return(
           <div className="card z-depth-0 project-summary">
                 <div className="card-content grey-text text-darken-3">
                     <span className="card-text">
                         {project.title}
                     </span>
                     <p>
                         created by:
                     </p>
                     <p className="grey-text">3d  </p>
                 </div>
            </div>
    )
}
export default ProjectSummry