import React, {Component} from 'react';
import './About.css';

import { Button, Fade } from 'reactstrap';



export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (

            <div>
                
                <Button className="aboutme" color="warning" onClick={this.toggle}>About me</Button>
                
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
        
                    <p>
                        Soy Desarrolladora front end, me apasiona el desarrollo y creación de aplicaciones web y mobiles, 
                        así como también el continuar aprendiendo nuevos lenguajes de programación.
                        Mi background es Ing en Admon y me gusta combinarlo en lo tech.
                    </p>
                </Fade>
          
            </div>
           
        );
    }

    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
};