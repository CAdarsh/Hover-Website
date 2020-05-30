import React from 'react';
import './About.css';
import Image from '../../static/images/folder.jpg';
import Hireus from '../hireus/Hireus';



function About(props) {
    return (
        <div className="About">
            
            <div className="overlay-one">
            
            </div>
            
            <div className="overlay-second">
            
            </div>
            
            <div className="overlay-third">
            
            </div>

            <div className="main-heading">
                <div className="letter-up">A</div>BOUT <div className="letter-up">U</div>S
            </div>

            <div className="main-content">
            Hover Studio is the brainchild of an aspiring engineering student who decided 
            to put his and his peers’ skills to good use. A group of five, we at Hover 
            Studio, believe the source of good work is a good idea. We establish your brand
            and give it an identity on the web, from start to finish, guiding you every
            step of the way by taking care of designing, developing and putting a word
            about your brand out there on the internet, to make sure it does not miss an eye.    


            </div>

            <div className="MTT">
                <div className="MTT-heading">
                    <h2>MEET THE TEAM</h2>
                </div>
                <div className="MTT-members">
                    <div className="MTT row-1">
                        <div className="member">
                            <div style={{backgroundImage:`url(${Image})`}} className="dp"></div>
                            <div className="center-name"><div className="name">Adarsh C</div></div>
                            <button className="center-vm"><div className="MTT-view-more">View More</div></button>
                        </div>
                        <div className="member">
                            <div style={{backgroundImage:`url(${Image})`}} className="dp"></div>
                            <div className="center-name"><div className="name">Sudarshan V</div></div>
                            <button className="center-vm"><div className="MTT-view-more">View More</div></button>
                        </div>
                        <div className="member">
                            <div style={{backgroundImage:`url(${Image})`}} className="dp"></div>
                            <div className="center-name"><div className="name">Sudarshan N Srinivas</div></div>
                            <button className="center-vm"><div className="MTT-view-more">View More</div></button>
                        </div>
                    </div>
                    <div className="MTT row-2">
                        <div className="member">
                            <div style={{backgroundImage:`url(${Image})`}} className="dp"></div>
                            <div className="center-name"><div className="name">Aayan Das</div></div>
                            <button className="center-vm"><div className="MTT-view-more">View More</div></button>
                        </div>
                        <div className="member">
                            <div style={{backgroundImage:`url(${Image})`}} className="dp"></div>
                            <div className="center-name"><div className="name">Kaushik S</div></div>
                            <button className="center-vm"><div className="MTT-view-more">View More</div></button>
                        </div>
                    </div>
                </div>
            </div>

            <Hireus />

        </div>
    )
}

export default About;