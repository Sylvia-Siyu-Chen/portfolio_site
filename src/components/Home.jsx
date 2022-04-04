import './Home.css'
import Sylvia from '../img/Sylvia.JPG'
import CarouselControll from './Carousel'
import signiture from '../img/signiture1.png'
import { Container, Row, Col } from 'react-bootstrap'
import Granim from "granim"
import  React ,{useEffect, useContext} from 'react'
// import StarfieldAnimation from 'react-starfield-animation'


const Home = () => {

    return(

        <div className="intro">


            <Container>
                <Row>

                    <Col>
                        <div className="intro_photo" >
                            <img src={Sylvia}></img>
                        </div>
                    </Col>

                    <Col>
                    <div className="noselect" > 
                        <div className='intro_text' >
                             <script src="./HomeScript.js"></script> 
                             <script src="https://cdn.blobity.dev/by.js?licenseKey=..."></script>
                             <script
                            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                            crossorigin="anonymous"
                            ></script>

                            <div id='begin'>
                                <span className = 'red'>H</span> 
                                <span className='yellow'>e</span> 
                                <span className='green'>y</span> 
                                <span className='blue'>,</span> 
                                <span className='pink'>I</span> 
                                <span className='orange'>'</span> 
                                <span className = 'red'>m</span> 
                                <span className='yellow'>S</span> 
                                <span className='green'>y</span> 
                                <span className='blue'>l</span> 
                                <span className='pink'>v</span> 
                                <span className = 'red'>i</span> 
                                <span className='orange'>a</span> 

                                </div>
                                <div className='who'>
                                    <span className='red'>w</span>
                                    <span className='blue'>h</span>
                                    <span className='pink'>o</span>
                                </div>

                                    <div className='write_code'>
                                    <span className = 'red'>W</span> 
                                    <span className='yellow'>r</span> 
                                    <span className='green'>i</span> 
                                    <span className='blue'>t</span> 
                                    <span className='pink'>e</span> 
                                    <span className='orange'>s</span> 
                                    <span className='red'> </span> 
                                    <span className='yellow'>C</span> 
                                    <span className='green'>o</span> 
                                    <span className='blue'>d</span> 
                                    <span className='pink'>e</span> 

                                </div>
                                    <div className='takes_photo'>

                                    <span className = 'red'>T</span> 
                                    <span className='yellow'>a</span> 
                                    <span className='green'>k</span> 
                                    <span className='blue'>e</span> 
                                    <span className='pink'>s</span> 
                                    <span className='pink'> </span> 
 
                                    <span className='blue'>photos</span> 
                                    
                                    </div>

                                    
                                    <div className='albert_camus'>
                               
                                    <span className = 'red'>R</span> 
                                    <span className='yellow'>e</span> 
                                    <span className='green'>a</span> 
                                    <span className='blue'>d</span> 
                                    <span className='pink'>s</span> 
                                    <span className='orange'> </span> 
                                    <span className='red'>A</span> 
                                    <span className='yellow'>l</span> 
                                    <span className='orange'>b</span> 
                                    <span className='blue'>e</span> 
                                    <span className='pink'>r</span> 
                                    <span className = 'red'>t</span> 
                                    <span className='yellow'> </span> 
                                    <span className='green'>C</span> 
                                    <span className='blue'>a</span> 
                                    <span className='pink'>m</span> 
                                    <span className='orange'>u</span> 
                                    <span className = 'red'>s</span> 

                                    </div>

                                        <div class="text-container">
                                                <h1 class="bold">Hello, I'm Dekun!</h1>
                                                <h1 class="bold content">A student at NYU.</h1>
                                                <h1 class="bold content">
                                                Previously full-stack software engineering intern at
                                                <a>ThoughtWorks.</a>
                                                </h1>
                                                <br />
                                                <a
                                                href="https://github.com/dekunma"
                                                target="_blank"
                                                data-blobity-offset-y="12"
                                                data-blobity-radius="10"
                                                ><i class="bi bi-github my-icon"></i
                                                ></a>
                                                </div>

                                    

                                    <div>types in lowercase</div>
                            <a>and welcomes bribes in the form of a leica lens or Kodak 35mm roll films </a>
                         </div>

    
                                 
                    </div>  


                        {/* <img className='sig' src={signiture} size={40}/> */} 
                    </Col>

                </Row>
            </Container>

            <div className='intro-project'>
                 {/* <CarouselControll/> */}
            </div>
        </div>

    )
}


export default Home