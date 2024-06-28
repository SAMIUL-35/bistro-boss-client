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

const Category = () => {
    return (
        <section >
           <div className='flex justify-center w-full'>
                <div className='text-center mb-4 mt-4 '>
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
            className="mySwiper max-w-screen-xl mb-20"
        >
            <SwiperSlide>
                <img src={img1} alt="Slide 1" />
                <h3 className="text-4xl uppercase text-center -mt-20"
            >Salads</h3>
                </SwiperSlide>
            <SwiperSlide><img src={img2} alt="Slide 2" />
            <h3 className="text-4xl uppercase text-center -mt-20"
            >soups</h3>
            </SwiperSlide>
            <SwiperSlide><img src={img3} alt="Slide 3" /><h3 className="text-4xl uppercase text-center -mt-20"
            >pizza</h3></SwiperSlide>
            <SwiperSlide><img src={img4} alt="Slide 4" /><h3 className="text-4xl uppercase text-center -mt-20"
            >Fruits</h3></SwiperSlide>
            <SwiperSlide><img src={img5} alt="Slide 5" /><h3 className="text-4xl uppercase text-center -mt-20"
            >Salads</h3></SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;
