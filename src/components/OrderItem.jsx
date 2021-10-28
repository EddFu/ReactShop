import React, {useContext} from 'react';
import AppContext from '../context/AppContext.js'
import '../Styles/OrderItem.scss'; 

import CloseIcon from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  //importamos el use context y nuestro hook al documento
  const { removeFromCart } = useContext(AppContext);
  //creamos la funcion que nos permita remover los productos
  const handleRemove = product => {
    removeFromCart(product);
  }

    return (
      <div className="OrderItem">
        <figure>
          <img src= {product.images[0]} alt={product.title}/>
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
        
        <img src= {CloseIcon} alt="close" onClick={() => handleRemove(product)} />
      </div>
    );
}

//agregamos el handleRemove a nuestra img de la x con un onClick para que nos remueva el producto

export default OrderItem;