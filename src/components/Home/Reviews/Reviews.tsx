import Image from "next/image";
import "./Reviews.scss";
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";

interface Props {
    locale: string
}

const Reviews = ({ locale }: Props) => {
    return (
        <div className="reviews">

            <div className="container">
                <h2>
                    {locale === "ar"
                        ? "مايقوله عملائنا عنا"
                        : "What our customers say about us"}
                </h2>

                <div className="content">
                    <div className="image">
                        <Image
                            src="/images/feadback.png"
                            alt="feadback"
                            width={520}
                            height={400}
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <div className="slider-reviews">
                        <ReviewsSlider locale={locale} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;