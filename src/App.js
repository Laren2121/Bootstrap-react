import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo from './components/demo'
import Navigation from './components/navigation'
import {Jumbotron, Button, Carousel} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Navigation/>  
      <div className="container">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Brick.jpg/1280px-Brick.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Brick.jpg/1280px-Brick.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Brick.jpg/1280px-Brick.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    </div>
  );
}

export default App;
