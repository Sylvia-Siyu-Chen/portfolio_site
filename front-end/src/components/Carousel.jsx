import Carousel from 'react-bootstrap/Carousel'
import {useState} from "react"
import spotify from '../img/Spotify.png'


function CarouselControll() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src = {spotify}
                height = {400}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Full-Stack Enginnering Project: Spotify Music Sharing Platform</h3>
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






            // <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            //     <div class="carousel-indicators">
            //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            //     </div>

            //     <div class="carousel-inner">
            //         <div class="carousel-item active">
            //             <img src="..." class="d-block w-100" alt="..."/>
            //         <div class="carousel-caption d-none d-md-block">
            //             <h5>First slide label</h5>
            //             <p>Some representative placeholder content for the first slide.</p>
            //         </div>
            //     </div>

            //     <div class="carousel-item">
            //          <img src="..." class="d-block w-100" alt="..."/>
            //         <div class="carousel-caption d-none d-md-block">
            //             <h5>Second slide label</h5>
            //             <p>Some representative placeholder content for the second slide.</p>
            //         </div>
            //     </div>

            //     <div class="carousel-item">
            //         <img src="..." class="d-block w-100" alt="..."/>
            //         <div class="carousel-caption d-none d-md-block">
            //             <h5>Third slide label</h5>
            //             <p>Some representative placeholder content for the third slide.</p>
            //         </div>
            //     </div>

            // </div>

            //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span class="visually-hidden">Previous</span>
            //     </button>

            //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span class="visually-hidden">Next</span>
            //     </button>
            // </div>
)
}
  
export default CarouselControll