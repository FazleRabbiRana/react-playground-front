import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "swiper/css/free-mode";

const slideItems = [
	{
		imgSrc: 'https://live.staticflickr.com/65535/49179073347_8b8d3aa9d9_h.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178285003_7abc8c4290_h.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178874022_f1d225d1cb_h.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178778016_26fd99c5c4_h.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178285233_a088da7d15_h.jpg',
	},
];

const CoverflowSlides = () => (
	<section className='slider-section'>
		<h2 className="section-title">Swiper Slide: <span>Coverflow</span></h2>

		<Swiper
			modules={[Navigation, Pagination, EffectCoverflow]}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={3}
			spaceBetween={40}
			loop={true}
			grabCursor={true}
			effect={'coverflow'}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 150,
				modifier: 1,
				slideShadows: false
			}}
			breakpoints={{
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			}}
		>
			{slideItems.map((item, i) => <SwiperSlide key={i * 0.9}>
				<div className="single-slide">
					<img src={item?.imgSrc} alt="" />
				</div>
			</SwiperSlide>)}
		</Swiper>
	</section>
);

export default CoverflowSlides;
