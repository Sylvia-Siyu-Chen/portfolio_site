import './App.css';
import CarouselControll from "./components/Carousel"
import { NavbarNested } from './components/Navbar';
import { Tab, Tabs, Nav, Container, Navbar } from 'react-bootstrap';
import Intro from './components/Intro';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;


function App() {

  const state = {
    current: 'mail',
  };

  const handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };


  return (
    <div className="App">
          <Navbar bg="dark" variant="dark" className='navbar' sticky='top'>
          {/* <Container> */}
            <Navbar.Brand href="/">___  Hi there,</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/Carousel">Projects</Nav.Link>
              <Nav.Link href="/Carousel">Experience</Nav.Link>
              <Nav.Link href="/foto">Fun Facts</Nav.Link>
              <Nav.Link href="/register">Resume</Nav.Link>
            </Nav>
          {/* </Container> */}
        </Navbar>
      <header className="App-header">

        <Intro/>
      <div className='Carousel'>
        <CarouselControll/>
      </div>
      </header>
    </div>
  );
}

export default App;
