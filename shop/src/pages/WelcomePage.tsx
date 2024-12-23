import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import '../App.css';
import ProductBox from '../components/productBox.tsx';
import Data from '../data/data.ts';
import { useState } from 'react';

function WelcomePage(){

    const [pData] = useState(Data);

    console.log(pData);
    return(
        <div>

      <div className="main-bg"></div>

    
      <div className='product-list'>
      {pData.map(function(a, i){
        return(
          <ProductBox key={i} id={i}/>
        )
      })}
      </div>
      </div>
      )

}

export default WelcomePage;