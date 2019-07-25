import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
class Projects extends Component {
    render(){
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src="http://www.hangman.no/" alt="Card image cap" />
        <CardBody>
          <CardTitle><h4>Hangman</h4></CardTitle>
          <CardText>One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters or numbers, within a certain number of guesses..</CardText>
          <Button className="btn_hangman" onClick href="https://github.com/JanethRomo/GDL002-mobile-game" ><ion-icon  name="logo-game-controller-b"></ion-icon>Hangman</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Burguer Queen</CardTitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button className="btn_hangman" onClick href="https://github.com/JanethRomo/GDL002-burger-queen"><ion-icon name="restaurant"></ion-icon>Burguer Queen</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Visitors</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className="btn_hangman" onClick href="https://github.com/JanethRomo/visitors"><ion-icon name="clipboard"></ion-icon>Visitors</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );

}
}

export default Projects;