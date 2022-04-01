import './App.css';
import CarouselControll from "./components/Carousel"
import { Tab, Tabs, Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Education from './components/Education';
import { Menu } from 'antd';
import Experience from './components/Experience';
import FunFact from './components/FunFactCat';
import Home from './components/Home';
import Connect from './components/Connect';
import Foto from './components/Foto';
import HomeScript from './components/HomeScript';
import { Routes ,Route,BrowserRouter as Router} from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;


function App() {


  return (
    
    <div className="App">
          <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

          <Navbar bg="dark" variant="dark" className='navbar' sticky='top'>
          {/* <Container> */}
            <Navbar.Brand href="/homescript">Hello</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/project">Projects</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <NavDropdown title="Fun Facts" id="fun-facts" variant="dark" bg="dark">
                  <NavDropdown.Item href='/fun/cat'>My Cat</NavDropdown.Item>
                  <NavDropdown.Item href='/fun/foto'>Foto Portfolio</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/connect">Connect</Nav.Link>
              {/* <Nav.Link href="/register">Resume</Nav.Link> */}
            </Nav>
          {/* </Container> */}
        </Navbar>
      <Router>
        <Routes>
          <Route path='/education' element={<Education />}/>
          <Route path='/project' element={<CarouselControll />}/>
          <Route path='/fun/cat' element={<FunFact />}/>
          <Route path='/fun/foto' element={<Foto />}/>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/homescript' element = {<HomeScript />}/>
          <Route path = '/connect' element = {<Connect />}/>
          <Route path = '/experience' element = {< Experience/>}/>

        </Routes>
      </Router>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
