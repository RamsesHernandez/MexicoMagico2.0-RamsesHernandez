import React, { useState, useEffect } from 'react';

import { ItemListContainer, NavBar, Cart } from './components';
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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

  const addToCart = async (productId, quantity) => await commerce.cart.add(productId, quantity).then(setCart);

  const updateCartQty = async (productId, quantity) => await commerce.cart.update(productId, { quantity }).then(setCart);

  const removeFromCart = async(productId) => await commerce.cart.remove(productId).then(setCart);

  const emptyCart = async() => await commerce.cart.empty().then(setCart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
      <Router>
      <div >
        <NavBar totalItems={cart.total_items}/>
        <Routes>
            <Route exact path='/' element={<ItemListContainer products={products} addToCart={addToCart} />}></Route>
            <Route exact path='/cart'
              element={
                <Cart
                  cart={cart}
                  updateCartQty={updateCartQty}
                  removeFromCart={removeFromCart}
                  emptyCart={emptyCart}
              />}
            ></Route>
        </Routes>
      </div>
      </Router>
  );
};

export default App;
