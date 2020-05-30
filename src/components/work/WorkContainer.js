import React from 'react';


function WorkContainer(props){
    console.log(props)
    return (
        <div>
            <img className="image-work-container" src={props.link} />
        </div>
    )
}


export default WorkContainer;