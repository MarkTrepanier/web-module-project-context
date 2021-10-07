import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {productContext} from './context/productcontext';
import {cartContext} from './context/cartContext';
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart,item])
	};

	return (
		<productContext.Provider value={{products,addItem}}>
		<cartContext.Provider value={{cart}}>
		<div className="App">
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
		</div>
		</cartContext.Provider>
		</productContext.Provider>
	);
}

export default App;
