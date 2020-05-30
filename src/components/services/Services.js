import React from 'react';
import Hireus from '../hireus/Hireus';
import './Services.css';

function Services(props) {
    const services={
        'Development':['Web Development','Mobile App Development'],
        'Design':['UI/UX Solutions [Web, Mobile, Wearables]','Graphic Design','Product Design'],
        'Marketing':['Search Engine Optimization','Digital Marketing','Social Media Management'],
        'Branding':['Logo Design','Brand Identity','Brand Guidelines','Packaging']
    };
    let servicesDiv=[];
    for (let [key, value] of Object.entries(services)) {
        servicesDiv.push(
        <>
            <div className="s-service">{key}</div>
            <div className="service-info">
                {value.map((val,id)=>{
                    if(id!==value.length-1)
                        return(<>
                        <div className="service-info-row">{val}</div>
                        <div className="hr"></div>
                        </>)
                    else
                        return(
                            <div className="service-info-row">{val}</div>
                        )
                })}
            </div>
        </>
        );
    }
    return (
        <div className="Services">
            <div className="s-overlay-one">
            
            </div>
            <div className="s-overlay-second">
            
            </div>
            
            <div className="s-overlay-third">
            
            </div>
            <div className="main-heading" id="s">
                <div className="letter-up">S</div>ERVICES
            </div>
            <div className="DDMB">
                {servicesDiv}
            </div>
            <Hireus/>
        </div>
    )
}

export default Services;