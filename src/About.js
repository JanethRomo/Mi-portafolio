import React, {Component} from 'react';
import Background0 from './img/Jan.jpg';
import './About.css';

import { Button, Fade } from 'reactstrap';

const myStyles0 = {
    backgroundImage : `url( ${Background0} )`,
    height: '50vh',
    backgroundSize:'cover'
  
  }

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
                <header style={myStyles0}></header>
                    <p>
                        Soy Desarrolladora front end, me apasiona el desarrollo y creación de aplicaciones web y mobiles, 
                        así como también el continuar aprendiendo nuevos lenguajes de programación.
                        Mi background es Ing en Admon y me gusta combinarlo en lo tech.
                    </p>
                    <Button color="blue" href="src/img/CV Janeth Romo.pdf">Descarga CV</Button>
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