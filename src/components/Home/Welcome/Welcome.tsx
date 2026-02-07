import "./Welcome.scss";
import { Link } from "@/i18n/navigation";
import MainSlider from "@/components/MainSlider/MainSlider";

interface Props {
    locale: string
}

const Welcome = ({ locale }: Props) => {
    const isAr = locale === "ar";

    return (
        <div className="welcome">
            <div className="container">
                <div className="content">
                    <h1>
                        {isAr ? "مع تيتشاوي" : "With Teachawy"}
                    </h1>

                    <p>
                        {isAr
                            ? "أنشئ منصتك التعليمية … وابدأ التدريس بطريقتك"
                            : "Create your educational platform and start teaching your way"}
                    </p>

                    <p>
                        {isAr
                            ? "حوّل خبرتك التعليمية إلى منصة احترافية خلال دقائق. أنشئ موقعك، أضف دوراتك، وابدأ الوصول لطلابك بدون تعقيد تقني."
                            : "Turn your teaching expertise into a professional platform in minutes. Create your site, add courses, and reach students with no technical hassle."}
                    </p>

                    <div className="links">
                        <Link href="">
                            {isAr ? "كيف تعمل المنصة" : "How It Works"}
                        </Link>
                        <Link href="">
                            {isAr ? "ابدء الان" : "Start Now"}
                        </Link>
                    </div>
                </div>

                <div className="slider">
                    <MainSlider isAr={isAr} />
                </div>
            </div>
        </div>
    );
}

export default Welcome;