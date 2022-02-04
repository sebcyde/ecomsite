import React from 'react';
import { Carousel } from 'react-materialize';
import './HomepageCarousel.css';

function HomepageCarousel() {
	return (
		<div className="HomepageCarouselContainer">
			<Carousel
				carouselId="Carousel-31"
				images={[
					'https://cdn.shopify.com/s/files/1/0393/4303/0317/files/AR_desktop_slider_template_png24_1000x.png?v=1642009935',
					'https://cdn.shopify.com/s/files/1/0393/4303/0317/files/Website_banners_LL_eae9e9a9-a3d0-4095-a9f9-c88480561813_1000x.png?v=1643388839',
					'https://cdn.shopify.com/s/files/1/0393/4303/0317/files/12_1000x.png?v=1643627738',
					'https://cdn.shopify.com/s/files/1/0393/4303/0317/files/Website_banner_Agent_X_1000x.png?v=1643897335',
					'https://cdn.shopify.com/s/files/1/0393/4303/0317/files/10_1000x.png?v=1643627525',
				]}
				options={{
					dist: -200,
					duration: 200,
					fullWidth: false,
					indicators: false,
					noWrap: false,
					numVisible: 3,
					onCycleTo: null,
					padding: 100,
					shift: 0,
				}}
			/>
		</div>
	);
}

export default HomepageCarousel;
