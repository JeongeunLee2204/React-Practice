import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import ProductBox from './components/productBox.jsx';
import Data from './data/data.ts';
import { useState } from 'react';

function App() {
  const [pData] = useState(Data);

  console.log(pData);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" style={{ height: '60px', width: '100%', marginBottom: '20px' }}>
        <Container>
          <Navbar.Brand href="#home">Elephant Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

    
      <div className='product-list'>
      {pData.map(function(a, i){
        return(
          <ProductBox key={i} id={i}/>
        )
      })}
      </div>

    </div>
  );
}

export default App;
