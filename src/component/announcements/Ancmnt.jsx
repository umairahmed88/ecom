import React from "react";

const Ancmnt = () => {
	const myStyle = {
		width: "30%",
		height: "340px",
	};

	const myStyle1 = {
		width: "65%",
		height: "340px",
	};

	return (
		<>
			<section className='announce background'>
				<div className='container d_flex'>
					<div className='img' style={myStyle}>
						<img src='/sale.jpeg' width='100%' height='100%' alt='' />
					</div>
					<div className='img' style={myStyle1}>
						<img src='/sale2.jpeg' width='100%' height='100%' alt='' />
					</div>
				</div>
			</section>
		</>
	);
};

export default Ancmnt;
