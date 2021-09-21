import React, { Component } from 'react';
import axios from 'axios';
import "./css/style.css";
// import Carousel from 'react-bootstrap/Carousel'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherDataInfo: {},
      showWeatherData: false
    }
  }

  getWeatherInfo = async () => {
    // https://class07-local-server.herokuapp.com/getWeather?cityName=amman
    let URL = `http://localhost:3001/getWeather?cityName=amman`;
    let weatherData = await axios.get(URL)
    
    this.setState({
      weatherDataInfo: weatherData.data,
      showWeatherData: true
    })
    console.log(this.state.weatherDataInfo)
  }

  render() {
    return (
      <div>
        <button onClick={this.getWeatherInfo} className="button">Get Weather Info</button>

        {
          this.state.showWeatherData &&
          this.state.weatherDataInfo.map(element =>{
            return (
              <div>
                <p>{element.data}</p>
                <p>{element.description}</p>
              </div>
            )
          })
        }
        {/* <p>{this.state.weatherDataInfo}</p> */}


{/* 
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>


    );
  }
}

export default App;