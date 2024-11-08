import React from 'react'
import ViewProduct from '../../Components/ViewProduct/ViewProduct';
import './Product.css';
import Suggetions from '../../Components/ViewProduct/Suggetions';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullImage from '../../Components/ViewProduct/FullImage';

const Product = ({openedFullImage, setOpenedFullImage}) => {

  const {category,id} = useParams();

  const products = useSelector(state => state.products);

  const productId = Number(id);
  const chosenProduct = products.find(product => product.id === productId);

  return (
    <div className='productPage'>
      <ViewProduct chosenProduct={chosenProduct} openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage}/>
      <Suggetions category={category} products={products}/>

    {
      openedFullImage.isOpen &&(
      <FullImage openedFullImage={openedFullImage} setOpenedFullImage={setOpenedFullImage} chosenProduct = {chosenProduct}/>
      )
    }
    </div>
  )
}

export default Product
