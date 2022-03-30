import Carousel from 'react-bootstrap/Carousel'
import {useState} from "react"
import spotify from '../img/Spotify.png'
import './Carousel.css'


function CarouselControll() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='project_overview'>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src = {spotify}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3><b>Full-Stack Enginnering:</b> Spotify Sharing Platform</h3>
                    <p>Built with React, Express, NodeJs, and MongoDB</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
   
)
}
  
export default CarouselControll