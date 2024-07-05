import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import Titlename from '../../../shared/titlename/Titlename';

const slides = [
    { id: 1, img: img1, title: "Salads" },
    { id: 2, img: img2, title: "Soups" },
    { id: 3, img: img3, title: "Pizza" },
    { id: 4, img: img4, title: "Fruits" },
    { id: 5, img: img5, title: "Salads" }
];

const Category = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    useEffect(() => {
        const swiperInstance = document.querySelector('.mySwiper').swiper;
        if (swiperInstance) {
            swiperInstance.on('slideChange', () => handleSlideChange(swiperInstance));
        }
    }, []);

    return (
        <section>
            <div className='flex justify-center w-full'>
                <div className='text-center mb-4 mt-4'>
                    <Titlename
                        subheading="----from 11:00am to 10:00pm----"
                        heading="ORDER ONLINE"
                    />
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                loop={true}
                className="mySwiper max-w-screen-xl mb-20"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`flex flex-col items-center ${currentSlide === index ? 'justify-end' : 'justify-start'}`}>
                            <img src={slide.img} alt={`Slide ${index + 1}`} className="mb-4" />
                            <h3 className="text-4xl uppercase text-center">{slide.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Category;
