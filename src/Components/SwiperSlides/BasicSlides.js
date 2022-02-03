import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

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

const BasicSlides = () => {
	return (
		<section className='slider-section'>
		<h2 className="section-title">Swiper Slide: <span>Basic</span></h2>

		<Swiper
			modules={[Navigation, Pagination, Autoplay, EffectFade]}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={1}
			spaceBetween={50}
			loop={true}
			speed={700}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			effect={"fade"}
			className='basic-slide'
		>
			{slideItems.map((item, i) => <SwiperSlide key={i * 0.9}>
				<div className="single-slide" style={{background: `url(${item?.imgSrc}) no-repeat center/cover`}}>
					<h1 className='title'>Slide number - {i}</h1>
				</div>
			</SwiperSlide>)}
		</Swiper>
	</section>
	);
};

export default BasicSlides;