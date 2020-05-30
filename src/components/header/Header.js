import React,{useState} from 'react';
import './Header.css'
import WhiteLogo from '../../static/images/white-logo.svg';
import {Link} from 'react-router-dom'

function Header(){
    const [ham,setHam]=useState(false);
    const handleClick=()=>{
        setHam(!ham);
    }
    return(
        <div className="Header">
          <Link to='/'>  <img src={WhiteLogo}/> </Link>
            <div className={ham?'ham open':'ham'} onClick={handleClick}>
                <span className="line l1"></span>
                <span className="line l2"></span>
                <span className="line l3"></span>
            </div>
            <ul className={ham?'open':''}>
                <li className="bord"><Link onClick={handleClick} className="linktag" to="/services">Services</Link></li>
                <li className="bord"><Link onClick={handleClick} className="linktag" to="/work">Work</Link></li>
                <li className="bord"><Link onClick={handleClick} className="linktag" to="/contact">Contact</Link></li>
                <li><Link onClick={handleClick} className="linktag" to="/about">About</Link></li>
            </ul>
        </div>
    )
}

export default Header;