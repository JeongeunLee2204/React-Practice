import { Routes, Route, Link, Outlet } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Data from './data/data';

function App() {
  const [pData] = useState(Data);

  useEffect(() => {
    if (!localStorage.getItem('watched')) {
        localStorage.setItem('watched', JSON.stringify([]));
    }
}, []);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" style={{ height: '60px', width: '100%', marginBottom: '20px' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">Elephant Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={`/detail/${pData[0].id}`}>Detail</Nav.Link>
            <Nav.Link as={Link} to="/event">Event</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/detail/:id" element={<DetailPage pData={pData} />} />
        <Route path="/event" element={<div>오늘의이벤트<Outlet /></div>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
