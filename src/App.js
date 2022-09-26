import "./App.css";
import { Header } from "./component/index.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./component/flashDeals/Data";
import Sdata from "./component/MainPage/Sdata";
import { useState } from "react";
import Cart from "./component/cart/Cart";
import Footer from "./component/footer/Footer";

function App() {
	const { productItems } = Data;
	const { shopItems } = Sdata;
	const [cartItem, setCartItem] = useState([]);

	const addToCart = (product) => {
		const productExit = cartItem.find((item) => item.id === product.id);

		if (productExit) {
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? {
								...productExit,
								qty: productExit.qty + 1,
						  }
						: item
				)
			);
		} else {
			setCartItem([...cartItem, { ...product, qty: 1 }]);
		}
	};

	const decreaseQty = (product) => {
		const productExit = cartItem.find((item) => item.id === product.id);

		if (productExit.qty === 1) {
			setCartItem(cartItem.filter((item) => item.id !== product.id));
		} else {
			setCartItem(
				cartItem.map((item) =>
					item.id === product.id
						? { ...productExit, qty: productExit.qty - 1 }
						: item
				)
			);
		}
	};

	return (
		<>
			<Router>
				<Header cartItem={cartItem} />
				<Switch>
					<Route path='/' exact>
						<Pages
							productItems={productItems}
							addToCart={addToCart}
							shopItems={shopItems}
						/>
					</Route>
					<Route path='/cart' exact>
						<Cart
							cartItem={cartItem}
							addToCart={addToCart}
							decreaseQty={decreaseQty}
						/>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
