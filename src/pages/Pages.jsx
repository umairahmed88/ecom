import React from "react";
import Discount from "../component/discount/Discount";
import FlasgDeals from "../component/flashDeals/FlasgDeals";
import HomePage from "../component/MainPage/HomePage";
import NewArrivals from "../component/NewArrival/NewArrivals";
import TopCate from "../component/top/TopCate";
import Shop from "../component/shop/Shop";
import Ancmnt from "../component/announcements/Ancmnt";
import Wrapper from "../component/wrapper/Wrapper";

const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
	return (
		<>
			<HomePage cartItem={cartItem} />
			<FlasgDeals productItems={productItems} addToCart={addToCart} />
			<TopCate />
			<NewArrivals />
			<Discount />
			<Shop shopItems={shopItems} addToCart={addToCart} />
			<Ancmnt />
			<Wrapper />
		</>
	);
};

export default Pages;
