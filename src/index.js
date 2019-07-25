import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import Navigation from './Navigation.js';
import Header from './Header';
import './Header.css';
import About from './About.js';
import './About';
import Projects from './Projects.js';
import './Projects.css';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';




class App extends Component{
    render(){
        return(
            <div>
                <Navigation LogoTitle="Portafolio" />
                <Header title="Janeth Romo" />
                <About/>
                <Projects/>
                <Contact/>
            </div>
        );
    }
     
}
export default App;



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
