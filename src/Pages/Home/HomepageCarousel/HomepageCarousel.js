import React from 'react';
import { Carousel } from 'react-materialize';

function HomepageCarousel() {
	return (
		<div className="HomepageCarouselContainer">
			<Carousel
				carouselId="Carousel-31"
				images={[
					'https://courtauld.ac.uk/wp-content/uploads/2021/06/Vincent-van-Gogh-1853%E2%80%931890-Self-Portrait-with-Straw-Hat-1887-The-Detroit-Institute-of-Arts-Bridgeman-Images.png',
					'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NTk4NjgxNjM0NTI3/hith-art-heists-scream-2.jpg',
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8GRaleWpjyyzrl6d66GOKwkUKvJ5gl4TMg&usqp=CAU',
					'https://www.leeds-art.ac.uk/media/1487534/emerson-pullman-fleeting-2020.jpg?width=750;height=870',
					'https://www.whitworth.manchester.ac.uk/NFT_detail-homepage-onethird.jpg',
				]}
				options={{
					dist: -100,
					duration: 200,
					fullWidth: false,
					indicators: true,
					noWrap: false,
					numVisible: 5,
					onCycleTo: null,
					padding: 0,
					shift: 0,
				}}
			/>
		</div>
	);
}

export default HomepageCarousel;
