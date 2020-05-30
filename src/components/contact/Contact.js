import React,{useState} from 'react';
import './Contact.css';
import Letter from '../../static/images/letter.svg';
import Email from '../../static/images/email.svg';
import Location from '../../static/images/location.svg';
import useInputState from "../../hooks/useInputState";

function Contact(props) {
    const [name,setName,resetName]=useInputState("");
    const [email,setEmail,resetEmail]=useInputState("");
    const [phone,setPhone,resetPhone]=useInputState("");
    const [message,setMessage,resetMessage]=useInputState("");
    const handleSubmit=()=>{
        resetName();
        resetEmail();
        resetPhone();
        resetMessage();
        console.log(name,email,phone,message);
    }
    return (
        <div className="Contact">
            <div className="overlay-one">
            
            </div>
            
            <div className="overlay-second">
            
            </div>
            
            <div className="overlay-third">
            
            </div>
            <div className="main-heading">
                <div className="letter-up">C</div>ONTACT <div className="letter-up">U</div>S
            </div>
            <div className="contact-content">
                Feel free to get in touch with us. We’d love to hear from you. 
                Submit your project idea, query or feedback and we will get 
                back to you as soon as possible.
            </div>
            <img className="contact-img" src={Letter}/>
            <div className="contact-info">
                <div id="contact-email">
                    <img src={Email}/>
                    <p>thehoverstudio@gmail.com</p>
                </div>
                <div id="contact-location">
                    <img src={Location}/>
                    <p>Bengaluru, India</p>
                </div>
            </div>

            <div className="contact-us-container">
                <div className="Name">
                    <input type="text" value={name} onChange={setName} placeholder="Name" className="form-name form-input" id="form-name"></input>
                    <div className="form-margin"><input type="text"  value={email} onChange={setEmail} placeholder="Email" placeholder="Email" className="form-email form-input" id="form-email"></input></div>
                    <div className="form-margin"><input type="text" value={phone}  onChange={setPhone} placeholder="Phone" className="form-phone form-input" id="form-phone"></input></div>
                    <div className="form-margin-comm">

                            <div className="form-margin form-selection-text">Preferred method of communication</div>
                            
                            <div className="form-margin form-selection">
                                    
                            <div>  
                                <input type="checkbox" className="form-input" id="form-email" name="email" value="Email" />
                                <label for="form-email"> Email</label>
                            </div>
                            <div>
                                <input type="checkbox" id="form-phone" name="phone" value="Phone" />
                                <label for="form-phone" id="form-phone"> Phone</label>
                            </div>
                    </div>
                        
                    </div>
                    <div className="form-margin">
                        <div className="form-message-container">
                            <input type="text" value={message} onChange={setMessage} className="form-textarea form-input-message" id="message" placeholder="Message">
                            </input>
                        </div>
                    </div>

                    <div className="form-button-container">
                        <div className="form-button" onClick={handleSubmit}><div> SEND </div></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;