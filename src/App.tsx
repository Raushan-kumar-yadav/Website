
import './App.css'
/* componenet import */

import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react' 

import Header from '@/components/header'
import Footer from '@/components/footer';
import Home from '@/components/pages/Home';
import  Products  from '@/components/pages/Products';
import ProductDetails from '@/components/pages/ProductDetails';
import Price from '@/components/pages/price';

function App() {

  return (
    <ReactLenis root>
      <div className="Header">
       
        <Header />
        </div>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path='/products/:productid' element={<ProductDetails/>}></Route>
          <Route path='/products/:productid/:price' element={<Price/>} />
          
        </Routes>
      </main>
        <div className="Footer">
       
        <Footer />
        </div>
    </ReactLenis>
  )
}

export default App
