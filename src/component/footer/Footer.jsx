import React from "react";
import "./style.footer.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className='container grid2'>
					<div className='box'>
						<h1>UA</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							mollitia. Sit laborum ab, eius fugit doloribus tenetur fugiat,
						</p>
						<div className='icon d_flex'>
							<div className='img d_flex'>
								<i className='fa-brands fa-google-play'></i>
								<span>Google Play</span>
							</div>
							<div className='img d_flex'>
								<i className='fa-brands fa-app-store-ios'></i>
								<span>App Store</span>
							</div>
						</div>
					</div>
					<div className='box'>
						<h2>About Us</h2>
						<ul>
							<li>Carrers</li>
							<li>Our Stores</li>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className='box'>
						<h2>Customer Care</h2>
						<ul>
							<li>Help Center</li>
							<li>How to Buy</li>
							<li>Track Your Order</li>
							<li>Corporate And Bul Purchasing</li>
							<li>Return & Refunds</li>
						</ul>
					</div>
					<div className='box'>
						<h2>Contact Us</h2>
						<ul>
							<li>ABC Business Sector Business Avenue</li>
							<li>Email: business@business.com</li>
							<li>001-234-56789</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
