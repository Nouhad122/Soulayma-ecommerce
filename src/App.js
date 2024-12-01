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
const Product = lazy(() => import('./Pages/Product/Product'));
const CartPage = lazy(() => import('./Pages/CartPage/CartPage'));
const NoMatch = lazy(() => import('./Components/Secondary-Comps/NoMatch'));
const AboutPage = lazy(() => import('./Pages/FooterPages/AboutPage'));
const FAQMain = lazy(() => import('./Pages/FooterPages/FAQMain'));
const Shipping = lazy(() => import('./Pages/FooterPages/Shipping'));
const Returns = lazy(() => import('./Pages/FooterPages/Returns'));
const PrivacyPolicy = lazy(() => import('./Pages/FooterPages/PrivacyPolicy'));
const Tutorials = lazy(() => import('./Pages/FooterPages/Tutorials'));
const PlacingOrder = lazy(() => import('./Pages/FooterPages/FAQPages/PlacingOrder'));
const OrderShipping = lazy(() => import('./Pages/FooterPages/FAQPages/OrderShipping'));
const OrderStatus = lazy(() => import('./Pages/FooterPages/FAQPages/OrderStatus'));
const OrderTracking = lazy(() => import('./Pages/FooterPages/FAQPages/OrderTracking'));
const OrderFixing = lazy(() => import('./Pages/FooterPages/FAQPages/OrderFixing'));
const OrderChanges = lazy(() => import('./Pages/FooterPages/FAQPages/OrderChanges'));
const GuaranteedSatiscation = lazy(() => import('./Pages/FooterPages/FAQPages/GuaranteedSatiscation'));
const Stocking = lazy(() => import('./Pages/FooterPages/FAQPages/Stocking'));
const Currency = lazy(() => import('./Pages/FooterPages/FAQPages/Currency'));
const FabricCare = lazy(() => import('./Pages/FooterPages/FAQPages/FabricCare'));
const DifferenceFabric = lazy(() => import('./Pages/FooterPages/FAQPages/DifferenceFabric'));
const InstantPremium = lazy(() => import('./Pages/FooterPages/FAQPages/InstantPremium'));
const CustomerService = lazy(() => import('./Pages/FooterPages/FAQPages/CustomerService'));
const SbRewards = lazy(() => import('./Pages/FooterPages/FAQPages/SbRewards'));



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
    setOpenedFilter(false);
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
                  <Route 
                    path='/shop/:category/:kind' 
                    element={<Shop openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} />} 
                  />
                  <Route 
                    path='/shop/all/:category/page/:page' 
                    element={<Shop openedFilter={openedFilter} setOpenedFilter={setOpenedFilter} />} 
                  />
                  <Route path='/shop/product/:category/:kind/:id' element= {<Product openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage}/>}/>
                  <Route path='/cart' element = {<CartPage/>}/>
                  <Route path='/about us' element = {<AboutPage/>}/>
                  <Route path='/faq' element = {<FAQMain/>}/>
                  <Route path='/faq/placing-order-payment-method' element = {<PlacingOrder/>}/>
                  <Route path='/faq/order-shipping' element = {<OrderShipping/>}/>
                  <Route path='/faq/order-status' element = {<OrderStatus/>}/>
                  <Route path='/faq/order-tracking' element = {<OrderTracking/>}/>
                  <Route path='/faq/order-changes-cancellation' element = {<OrderChanges/>}/>
                  <Route path='/faq/order-error-fixing' element = {<OrderFixing/>}/>
                  <Route path='/faq/guaranteed-satisfaction-returns-refund' element = {<GuaranteedSatiscation/>}/>
                  <Route path='/faq/stocking-restocking' element = {<Stocking/>}/>
                  <Route path='/faq/currency-conversion' element = {<Currency/>}/>
                  <Route path='/faq/fabric-care-stain-removal' element = {<FabricCare/>}/>
                  <Route path='/faq/difference-between-fabric-types' element = {<DifferenceFabric/>}/>
                  <Route path='/faq/instant-pre-sewn-hijabs' element = {<InstantPremium/>}/>
                  <Route path='/faq/customer-service-emails' element = {<CustomerService/>}/>
                  <Route path='/faq/sb-rewards-program' element = {<SbRewards/>}/>
                  <Route path='/shipping' element = {<Shipping/>}/>
                  <Route path='/returns' element = {<Returns/>}/>
                  <Route path='/tutorials' element = {<Tutorials/>}/>
                  <Route path='/privacy-policy' element = {<PrivacyPolicy/>}/>
                  <Route path='*' element= {<NoMatch/>}/>
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
