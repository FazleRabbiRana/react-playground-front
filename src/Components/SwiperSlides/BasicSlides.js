import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BasicSlides = () => {
	return (
		<section className='slider-section'>
		<h2 className="section-title">Swiper Slide: <span>Basic</span></h2>

		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			slidesPerView={1}
			spaceBetween={50}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			className='basic-slide'
		>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49179073347_8b8d3aa9d9_h.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178285003_7abc8c4290_h.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178874022_f1d225d1cb_h.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178778016_26fd99c5c4_h.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178285233_a088da7d15_h.jpg" alt="slider item" />
			</SwiperSlide>

			{/* <SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178874277_bd16c55a86_z.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178371963_593411c3b4_z.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49179071212_c93862c2f6_z.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178949877_e033bbbf6a_z.jpg" alt="slider item" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="https://live.staticflickr.com/65535/49178950182_cc20887d00_z.jpg" alt="slider item" />
			</SwiperSlide> */}
		</Swiper>
	</section>
	);
};

export default BasicSlides;