"use client";
import "./ReviewsSlider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
    locale: string
}

const ReviewsSlider = ({ locale }: Props) => {
    const reviews = Array.from({ length: 4 })

    return (
        <div className="reviews-slider">
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((el, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="box">
                            <h3>
                                {locale === "ar"
                                    ? "-- رامى توفيق --"
                                    : "-- Ramy Tawfik --"}
                            </h3>

                            <p>
                                {locale === "ar"
                                    ? "“كنت محتاج مكان واحد أجمع فيه كل محتواي التعليمي بشكل منظم، تيتشاوي خلّت الموضوع أبسط بكتير وادّتني موقع تعليمي بشكل احترافي من غير أي تعقيد.”"
                                    : "“I needed one place to organize all my educational content. Teachawy made everything much simpler and gave me a professional educational website without any complexity.”"}
                            </p>

                            <span>
                                {locale === "ar"
                                    ? "مدرس محتوى تعليمي"
                                    : "Educational Content Instructor"}
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ReviewsSlider;