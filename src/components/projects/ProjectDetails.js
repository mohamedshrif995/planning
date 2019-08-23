import React from 'react'

const ProkectDetails = (props) => {
    const id=props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        project title -{id}
                     </span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iusto nisi eligendi ducimus vitae earum ipsum quas, dolores eius voluptas, maiores labore perferendis quidem inventore error aliquid maxime similique debitis.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>posted bu mo</div>
                    <div>
                        2 nd ,spetember
       </div>
                </div>

            </div>
        </div>
    )
}

export default ProkectDetails
