import { Routes, Route, Link } from 'react-router-dom'
import WelcomePage from './pages/welcomePage';
import DetailPage from './pages/detailPage';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

function App() {


  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" style={{ height: '60px', width: '100%', marginBottom: '20px' }}>
        <Container>
          <Navbar.Brand href="/">Elephant Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">Detail</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
      </Routes>




    </div>
  );
}

export default App;
