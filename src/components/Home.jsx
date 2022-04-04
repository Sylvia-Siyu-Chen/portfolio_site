import './Home.css'
import Sylvia from '../img/Sylvia.JPG'
import CarouselControll from './Carousel'
import signiture from '../img/signiture1.png'
import { Container, Row, Col } from 'react-bootstrap'
import Granim from "granim"
import CustomCursorContext from './CursorContext.ts'
import  React ,{useEffect, useContext} from 'react'
// import StarfieldAnimation from 'react-starfield-animation'


const Home = () => {

    // const perf = require('./HomeScript.html');

    try{  
    useEffect(() => {
        new Granim({
          element: "#logo-canvas",
          direction: "left-right",
          opacity: [1, 1],
          states: {
            "default-state": {
              gradients: [
                ["#ee9ca7", "#0f9b0f"],
                ["#ffdde1", "#ff9a9e"],
                ["#ff7b59", "#ff4d00"],
                ["#ff9a9e", "#ffdde1"],
                ["#ff4d00", "#ff7b59"],
                ["#ffdde1", "#ff9a9e"],
              ],
              transitionSpeed: 2000,
            },
          },
        });
      }, []);
    }
    catch(error){
        console.log("error here!!!!:", error)
    }

    return(

        <div className="intro">

            <canvas id='logo-canvas'></canvas>

            {/* <Container>
                <Row>

                    <Col>
                        <div className="intro_photo" >
                            <img src={Sylvia}></img>
                        </div>
                    </Col>

                    <Col> */}
                        <div className='intro_text' >
                            <div> hi stranger, thank you for dropping by  </div>
                                <div id='violet'>this site is about someone named sylvia(siyu) chen, who</div> 
                                    <div>writes <span>code</span></div>
                                    <div>takes photos</div>
                                    <div>reads albert camus</div>
                                    <div>types in lowercase</div>
                            <div>and welcomes bribes in the form of a leica lens or Kodak 35mm roll films </div>
                        </div>
                        <img className='sig' src={signiture} size={40}/>
                    {/* </Col>

                </Row>
            </Container> */}

            <div className='intro-project'>
                {/* <CarouselControll/> */}
            </div>
        </div>

    )
}


export default Home