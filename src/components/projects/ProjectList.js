import React from 'react';
import { Link } from 'react-router-dom'
import ProjectSummry from './ProjectSummry'
const ProjectList = ({ Projects }) => {

    return (
        <div className="project-list section" >

            {
                Projects && Projects.map(project => {
                    return (
                        <Link to={'/project/'+project.id} key={project.id}>
               
                    <ProjectSummry project={project}  />
                      </Link >
  
                            )
                        })
           }
  
    </div>
    )
}

export default ProjectList;