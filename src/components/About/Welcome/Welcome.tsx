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
                        {isAr ? "من نحن في تيتشاوي؟" : "Who are we at Teachawy?"}
                    </h1>

                    <p>
                        {isAr
                            ? "تيتشاوي منصة تعليمية رقمية، هدفها تمكين المدرسين من إدارة تجربتهم التعليمية أونلاين بشكل منظم واحترافي."
                            : "Titchawy is a digital educational platform whose goal is to enable teachers to manage their online educational experience in an organized and professional manner."}
                    </p>

                    <p>
                        {isAr
                            ? "نحن لا نقدّم مجرد تصميم أو موقع، بل نوفّر بيئة تعليمية متكاملة تساعد المدرس على التركيز على المحتوى والتعليم، بدل الانشغال بالتفاصيل التقنية."
                            : "We don't just offer a design or a website; we provide an integrated learning environment that helps the teacher focus on the content and teaching, instead of being preoccupied with technical details."}
                    </p>

                    <div className="links">
                        <Link href="">
                            {isAr ? "تواصل معنا" : "Contact us"}
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