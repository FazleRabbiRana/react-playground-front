import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const slideItems = [
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178874277_bd16c55a86_z.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178371963_593411c3b4_z.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49179071212_c93862c2f6_z.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178949877_e033bbbf6a_z.jpg',
	},
	{
		imgSrc: 'https://live.staticflickr.com/65535/49178950182_cc20887d00_z.jpg',
	},
];

const ProgressbarSlides = () => {
	return (
		<section className='slider-section'>
		<h2 className="section-title">Swiper Slide: <span>Progress bar</span></h2>

		<Swiper
			modules={[Navigation, Pagination]}
			navigation
			pagination={{
				type: "progressbar",
			}}
			slidesPerView={1}
			spaceBetween={50}
			speed={500}
			className='progress-slide'
		>
			{slideItems.map((item, i) => <SwiperSlide key={i * 0.9}>
				{/* <div className="single-slide" style={{background: `url(${item?.imgSrc}) no-repeat center/cover`}}>
					<h1 className='title'>Slide number - {i}</h1>
				</div> */}
				<div className="single-slide">
					<img src={item?.imgSrc} alt="" />
				</div>
			</SwiperSlide>)}
		</Swiper>
	</section>
	);
};

export default ProgressbarSlides;