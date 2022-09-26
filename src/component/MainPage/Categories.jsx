import React from "react";

const Categories = () => {
	const data = [
		{
			cateImg: "/fashion.jpg",
			cateName: "Fashion",
		},
		{
			cateImg: "/electronics.jpg",
			cateName: "Electronic",
		},
		{
			cateImg: "/cars.jpg",
			cateName: "Cars",
		},
		{
			cateImg: "/home.jpg",
			cateName: "Home & Garden",
		},
		{
			cateImg: "gifts.jpeg",
			cateName: "Gifts",
		},
		{
			cateImg: "/music.jpg",
			cateName: "Music",
		},
		{
			cateImg: "/health.jpeg",
			cateName: "Health & Beauty",
		},
		{
			cateImg: "/pets.jpeg",
			cateName: "Pets",
		},
		{
			cateImg: "/toys.jpg",
			cateName: "Baby Toys",
		},
		{
			cateImg: "/groceries.jpeg",
			cateName: "Groceries",
		},
		{
			cateImg: "/books.jpeg",
			cateName: "Books",
		},
	];

	return (
		<>
			<div className='category'>
				{data.map((value, index) => {
					return (
						<div className='box f_flex' key={index}>
							<img src={value.cateImg} alt={value.cateName} />
							<span>{value.cateName}</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Categories;
