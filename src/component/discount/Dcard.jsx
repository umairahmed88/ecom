import React from "react";
import Ddata from "./Ddata";
import Slider from "react-slick";

const Dcard = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		margin: 20,
	};

	return (
		<>
			<Slider {...settings}>
				{Ddata.map((val, index) => {
					return (
						<>
							<div className='product' key={index}>
								<div className='box'>
									<div className='img'>
										<img src={val.cover} alt='' />
									</div>
									<h4>{val.name}</h4>
									<h3>${val.price}.00</h3>
								</div>
							</div>
						</>
					);
				})}
			</Slider>
		</>
	);
};

export default Dcard;
