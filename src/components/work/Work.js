import React from 'react';
import './Work.css';
import WorkContainer from './WorkContainer';
import Hireus from '../hireus/Hireus';

const imageURL = ['./images/work-1.png','./images/work-2.png','./images/work-1.png','./images/work-1.png','./images/work-1.png','./images/work-1.png','./images/work-1.png','./images/work-1.png']

function Work(props) {
    let images= imageURL.map((val,i)=>{
        return(<WorkContainer key={i} link={val}/>)
    });
    return (
        <div>
            <div className="overlay-one">
                
            </div>
            
            <div className="overlay-second">
            
            </div>
            
            <div className="overlay-third" id="work">
            
            </div>
            
            <div className="main-heading" id="main-heading-work">
                OUR WORK
            </div>

            <div className="work-container-p">

                <WorkContainer link={imageURL[0]} />
                <WorkContainer link={imageURL[0]} />
                <WorkContainer link={imageURL[0]} />
                <WorkContainer link={imageURL[0]} />
                <WorkContainer link={imageURL[0]} />
                <WorkContainer link={imageURL[0]} />

            </div>
        

            <Hireus />
        
        </div>
        
    )
}

export default Work;