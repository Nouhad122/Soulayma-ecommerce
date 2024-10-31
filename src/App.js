import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Shop2 from './Pages/Shop2/Shop2';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Product from './Pages/Product/Product';
import NotMatch from './Components/NotMatch/NotMatch';
import CartPage from './Pages/CartPage/CartPage';
import {Provider} from 'react-redux';
import { store } from './redux';

function App() {
  const [openedList, setOpenedList] = useState(false);
  
  return (
    <Provider store={store}>
        <div className={`App ${openedList ? 'no-scrolling' : ''}`}>
              <div onClick={() => setOpenedList(false)} className={`blur-cover ${!openedList ? 'hidden-blur' : ''}`}></div>
              <Navbar openedList = {openedList} setOpenedList={setOpenedList}/>
              <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/shop/:category/:kind' element= {<Shop/>}/>
                <Route path='/shop/all/:category/page/:page' element = {<Shop2/>}/>
                <Route path='/shop/product/:category/:kind/:id' element= {<Product/>}/>
                <Route path='/cart' element = {<CartPage/>}/>
                <Route path='*' element= {<NotMatch/>}/>
              </Routes>
              <Footer/>
          </div>
    </Provider>
  );
}

export default App;
