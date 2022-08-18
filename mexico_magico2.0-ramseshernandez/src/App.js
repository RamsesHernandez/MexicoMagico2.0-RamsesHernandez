import React, { useState, useEffect } from 'react';

import { ItemListContainer, NavBar, Cart } from './components';
import { commerce } from './lib/commerce';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const addToCart = async (productId, quantity) => await commerce.cart.add(productId, quantity).then(setCart)


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (

      <div >
        <NavBar totalItems={cart.total_items}/>
        <ItemListContainer products={products} addToCart={addToCart} />
        {/* <Cart cart={cart} /> */}
      </div>
  );
};

export default App;
