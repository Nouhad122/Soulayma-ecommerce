import React, { lazy, Suspense, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, useLocation  } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/Secondary-Comps/ScrollToTop';
import {Provider} from 'react-redux';
import { store } from './redux';
import LoadingPage from './Components/Secondary-Comps/LoadingPage';
const Home = lazy(() => import('../src/Pages/Home/Home'));
const Shop = lazy(() => import('./Pages/Shop/Shop'));
const Shop2 = lazy(() => import('./Pages/Shop2/Shop2'));
const Product = lazy(() => import('./Pages/Product/Product'));
const CartPage = lazy(() => import('./Pages/CartPage/CartPage'));
const NotMatch = lazy(() => import('./Components/Secondary-Comps/NotMatch'));


function App() {
  const [openedList, setOpenedList] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);
  const [openedCategories, setOpenedCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [openedFullImage, setOpenedFullImage] = useState({isOpen:false, image:1});

  const location = useLocation();

  useEffect(() => {
    setOpenedList(false);
    setOpenedCategories({});
    setLoading(true);
    const timer = setTimeout(() =>{setLoading(false)},1000);
    return () => {
      clearTimeout(timer);
    };
  }, [location],[]);
  
  return (
    <Provider store={store}>
        <div className={`App ${openedList || openedFullImage.isOpen || openedFilter ? 'no-scrolling' : ''}`}>
              <div onClick={() => {setOpenedList(false); setOpenedFilter(false)}} className={`blur-cover ${!(openedList || openedFilter) ? 'hidden-blur' : ''}`}></div>
              <Navbar openedList = {openedList} setOpenedList={setOpenedList} openedCategories={openedCategories} setOpenedCategories={setOpenedCategories}/>
              <ScrollToTop location = {location}/>
              <Suspense>
            {
            loading ?
              <LoadingPage/>
              :(
                <div>
                <Routes>
                  <Route path='/' element= {<Home/>}/>
                  <Route path='/shop/:category/:kind' element= {<Shop openedFilter = {openedFilter} setOpenedFilter = {setOpenedFilter}/>}/>
                  <Route path='/shop/all/:category/page/:page' element = {<Shop2 openedFilter = {openedFilter} setOpenedFilter = {setOpenedFilter}/>}/>
                  <Route path='/shop/product/:category/:kind/:id' element= {<Product openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage}/>}/>
                  <Route path='/cart' element = {<CartPage/>}/>
                  <Route path='*' element= {<NotMatch/>}/>
                </Routes>
                <Footer/>
                </div>
             )
             
            }
              </Suspense>
          </div>
    </Provider>
  );
}

export default App;
