import './Home.css'
import Sylvia from '../img/Sylvia.JPG'
import CarouselControll from './Carousel'
import signiture from '../img/signiture1.png'
import { Container, Row, Col } from 'react-bootstrap'


function Home() {
    // const perf = require('./HomeScript.html');

    return(

        <div className="intro">
            <Container>
                <Row>

                    <Col>
                        {/* <div className="intro_photo" >
                            <img src={Sylvia}></img>
                        </div> */}
                    </Col>

                    <Col>
                        <div className='intro_text' >
                            <div> hi stranger, thank you for dropping by  </div>
                                <div id='violet'>this site is about someone named sylvia(siyu) chen, who</div> 
                                    <div>writes <b>code</b></div>
                                    <div>takes photos</div>
                                    <div>reads albert camus</div>
                                    <div>likes typing in lowercase</div>
                            <div>and welcomes bribes in the form of a leica lens or Kodak 35mm roll films </div>
                        </div>
                        <img className='sig' src={signiture} size={40}/>
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