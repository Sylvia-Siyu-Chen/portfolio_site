import './App.css';
import CarouselControll from "./components/Carousel"
import { NavbarNested } from './components/Navbar';
import { Tab, Tabs, Nav, Container, Navbar } from 'react-bootstrap';
import Intro from './components/Intro';
import Education from './components/Education';
import { Menu } from 'antd';
import Home from './components/Home';
import { Routes ,Route,BrowserRouter as Router} from 'react-router-dom';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;


function App() {


  return (
    <div className="App">
          <Navbar bg="dark" variant="dark" className='navbar' sticky='top'>
          {/* <Container> */}
            <Navbar.Brand href="/">___  Hi there,</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/project">Projects</Nav.Link>
              <Nav.Link href="/Carousel">Experience</Nav.Link>
              <Nav.Link href="/foto">Fun Facts</Nav.Link>
              <Nav.Link href="/register">Resume</Nav.Link>
            </Nav>
          {/* </Container> */}
        </Navbar>
      <Router>
        <Routes>
          <Route path='/education' element={<Education />}/>
          <Route path='/project' element={<CarouselControll />}/>
          <Route path='/foto' element={<Education />}/>
          <Route path = '/home' element = {<Home />}/>
        </Routes>
      </Router>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
