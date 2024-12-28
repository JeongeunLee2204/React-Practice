import { Routes, Route, Link, Outlet } from 'react-router-dom'
import WelcomePage from './pages/welcomePage';
import DetailPage from './pages/detailPage';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data/data'
function App() {

  const [pData] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" style={{ height: '60px', width: '100%', marginBottom: '20px' }}>
        <Container>
          <Navbar.Brand href="/">Elephant Shop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href={`/detail/${pData[0].id}`}>Detail</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/detail/:id" element={<DetailPage pData={pData}/>}/>
        <Route path="/event" element={<div>오늘의이벤트<Outlet></Outlet></div>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>




    </div>
  );
}

export default App;
