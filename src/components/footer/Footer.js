import React from 'react';
import './Footer.css';
import WhiteLogo from '../../static/images/white-logo.svg';

function Footer(props){
    return (
        <div>
            <div className="footer-container">

                <div> <img src={WhiteLogo} /> </div>  
                <div>    2020 Hover Studio.     </div>
    
            </div>
        </div>
    )
}

export default Footer;