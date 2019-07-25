import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component{
    render(){
        return(
            <div className="services">
                <h3>Janeth Romo</h3>
                <p>Contact</p>
                <div className="row">
                   <div>
                       <span>
                       <ion-icon name="compass"></ion-icon>
                       </span>
                       <h4>Location</h4>
                    <p>Guadalajara</p>
                    </div> 
                <div>
                    <span>
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </span>
                    <h4>Linkedin</h4>
                    <p></p>
                </div>
                   <div>
                        <span>
                        <ion-icon name="logo-github"></ion-icon>
                        </span>
                        <h4>Github</h4>
                    <p></p>
                    </div>
                   <div>
                       <span>
                       <ion-icon name="logo-whatsapp"></ion-icon>
                       </span>
                        <h4>Whatsapp</h4>
                    <p>000-00-0000</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default Contact;