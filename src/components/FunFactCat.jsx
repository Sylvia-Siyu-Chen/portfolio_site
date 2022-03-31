
import {useState} from 'react'
import { Button, Toast, Card, Container, Row, Col } from 'react-bootstrap';
import './FunFactCat.css'
import xiatian1 from '../img/xiatian1.jpeg'
import xiatian2 from '../img/xiatian2.JPG'
import xiatian3 from '../img/xiatian3.JPG'
import xiatian4 from '../img/xiatian4.jpeg'
import xiatianr1 from '../img/xiatian_racy1.JPG'



function FunFactCat(){
    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    return (
        <div className='funfacts'>
            <div className='fun_cat'>
                <div className='fun_description'>
                    I met her beside a trash bin in the middle of hot summer. She was a stray cat, with beautiful amber eyes and snowwhite fur.
                    </div>
                    <div className='fun_card'>
                        <Container>
                            <Row>
                                <Col>
                                    <Card style={{width : '18rem'}} bg="dark">
                                        <Card.Img variant='top' src={xiatian1}/>
                                        <Card.Title className='title'>
                                           <b>June 18th 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>Her first day in my place </div>
                                            <div> </div>

                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{width : '18rem'}} bg="dark">
                                        <Card.Img variant='top' src={xiatian2}/>
                                        <Card.Title className='title'>
                                           <b>December 3rd 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>She was learning statistic with me </div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{width : '18rem'}} bg="dark">
                                        <Card.Img variant='top' src={xiatian3}/>
                                        <Card.Title className='title'>
                                           <b>July 18th 2020</b>
                                        </Card.Title>
                                        <Card.Text className='text'>
                                            <div>A prefect couch catato!</div>
                                            <div> </div>
                                        </Card.Text>
                                    </Card>
                                </Col>

                                <Col>
                                        <Card style={{width : '18rem'}} bg="dark">
                                            <Card.Img variant='top' src={xiatian4}/>
                                            <Card.Title className='title'>
                                            <b>July 7th 2021</b>
                                            </Card.Title>
                                            <Card.Text className='text'>
                                                <div>she was trying to take the pillow</div>
                                                <div><del>so she became my pillow lol</del></div>
                                            </Card.Text>
                                        </Card>
                                </Col>
                            </Row>

                            <Row>


                            </Row>

                        </Container>

                                                        
                        <Button variant='outline-light' onClick={toggleShow} className="show">click to see her <del><b>racy</b></del> photo</Button>

                            <Toast show={show} onClose={toggleShow}>
                                <Toast.Header className='me-auto'>
                                    <strong>Shhhhhh...   Don't tell her </strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <img src={xiatianr1} width={200}/>
                                </Toast.Body>
                            </Toast>

                    </div>


            </div>
        </div>
    )
}

export default FunFactCat