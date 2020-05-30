import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';
import Hireus from '../hireus/Hireus';
import Image from '../../static/images/folder.jpg';
import Work1 from '../../static/images/work-1.png';
import Work2 from '../../static/images/work-2.png';
import Work3 from '../../static/images/work-3.png';
import Arrow from '../../static/images/arrow.svg';
import Marketing from '../../static/images/marketing.svg';
import Design from '../../static/images/design.svg';
import Branding from '../../static/images/branding.svg';

function Main(props) {
    return (
        <div>
            <div className="Main">
            
            </div>
            
            <div className="hero">
                <div className="hero-text">
                    We help you design, develop and 
                    create an identity for your product.
                </div>
                <div className="hero-grid">
                    <div className="img-container">
                        <div style={{backgroundImage:`url(${Image})`}} className="img1"></div>
                        <div style={{backgroundImage:`url(${Image})`}} className="img2"></div>
                        <div style={{backgroundImage:`url(${Image})`}} className="img3"></div>
                        <div style={{backgroundImage:`url(${Image})`}} className="img4"></div>
                        <div style={{backgroundImage:`url(${Image})`}} className="img5"></div>
                    </div>
                </div>
            </div>
            <div className="services-section">
                <h2 className="main-heading-M">SERVICES</h2>
                <div className="all-services">
                    <div className="service">
                        <div style={{backgroundImage:`url(${Marketing})`}} className="service-image"></div>
                        <div className="design"><h3>MARKETING</h3></div>
                        <div className="link"><Link className="know-more" to="/services">Know More</Link></div>
                    </div>
                    <div className="service">
                        <div style={{backgroundImage:`url(${Design})`}} className="service-image"></div>
                        <div className="design"><h3>DESIGN</h3></div>
                        <div className="link"><Link className="know-more" to="/services">Know More</Link></div>
                    </div>
                    <div className="service">
                        <div style={{backgroundImage:`url(${Branding})`}} className="service-image"></div>
                        <div className="design"><h3>BRANDING</h3></div>
                        <div className="link"><Link className="know-more" to="/services">Know More</Link></div>
                    </div>
                </div>
            </div>

            <h2 className="main-heading-M">PROJECTS</h2>

            <div className="work-carousal">

                <div className="view-all"> <div className="view-inner"> View All <img src={Arrow} className="arrow" />  </div> </div>
            
                <div className="work-container"> 
                    <div className="work"> <img src={Work1} /></div>
                    <div className="work"> <img src={Work2} /></div>
                    <div className="work"> <img src={Work3} /></div>
                    <div className="work"> <img src={Work1} /></div>
                    <div className="work"> <img src={Work2} /></div>
                </div> 
           
            </div>


            <div className="smol-heading">
                We work to make a difference. Get in touch with us today.
            </div>

            <Hireus />
        </div>
    )
}

export default Main;