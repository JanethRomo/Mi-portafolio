import React, {Component} from 'react';
import Background1 from './img/hangman.png';
import Background2 from './img/burgerQueen.jpg';
import Background3 from './img/registroVisitantes.jpg';
import { Card, Button, CardTitle, CardText, CardGroup,
  CardBody } from 'reactstrap';

 const myStyles1 = {
  backgroundImage : `url( ${Background1} )`,
  height: '50vh',
  backgroundSize:'cover'

}
const myStyles2 = {
  backgroundImage : `url( ${Background2} )`,
  height: '50vh',
  backgroundSize:'cover'

}
const myStyles3 = {
  backgroundImage : `url( ${Background3} )`,
  height: '50vh',
  backgroundSize:'cover'

}

class Projects extends Component {
    render(){
  return (
    <div>
      <h5>Projects</h5>
    <CardGroup>
      <Card>
        <CardBody>
          <CardTitle><h4>Hangman</h4><header style={myStyles1}></header></CardTitle>
          <CardText>One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters or numbers, within a certain number of guesses..</CardText>
          <Button className="btn_hangman" onClick href="https://github.com/JanethRomo/GDL002-mobile-game" ><ion-icon  name="logo-game-controller-b"></ion-icon>Hangman</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle><h4>Burguer Queen</h4><header style={myStyles2}></header></CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className="btn_hangman" onClick href="https://github.com/JanethRomo/GDL002-burger-queen"><ion-icon name="restaurant"></ion-icon>Burguer Queen</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle><h4>Visitors</h4><header style={myStyles3}></header></CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className="btn_hangman" onClick href="https://janethromo.github.io/visitors/home"><ion-icon name="clipboard"></ion-icon>Visitors</Button>
        </CardBody>
      </Card>
    </CardGroup>
  </div>

  );

}
}

export default Projects;