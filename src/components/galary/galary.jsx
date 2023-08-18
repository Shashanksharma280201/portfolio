import React from 'react';
import './galary.css'; // Your custom CSS file
import img1 from '../../assets/1.png';
import img2 from '../../assets/1.png'; // Updated image paths
import img3 from '../../assets/1.png'; // Updated image paths
import img4 from '../../assets/1.png'; // Updated image paths
import img5 from '../../assets/1.png'; // Updated image paths
import img6 from '../../assets/1.png'; // Updated image paths

// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Corrected import
// import 'swiper/components/pagination/pagination.min.css';

const data = [
    {
        image: img1,
        name: 'shashank'
    },
    {
        image: img2,
        name: 'shashank'
    },
    {
        image: img3,
        name: 'shashank'
    },
    {
        image: img4,
        name: 'shashank'
    },
    {
        image: img5,
        name: 'shashank'
    },
    {
        image: img6,
        name: 'shashank'
    }
];

const Galary = () => {
    return (
        <section id="galary">
            <h2>My Gallery</h2>

            <Swiper className="container galary__container"
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ image, name }, index) => {
                    return (
                        <SwiperSlide key={index} className="galary">
                            <div className="client__avatar">
                                <img src={image} alt={`Image ${index + 1}`} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Galary;
