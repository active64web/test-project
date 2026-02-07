import "./Cta.scss";

interface Props {
    locale: string
}

const Cta = ({ locale }: Props) => {
    return (
        <div className="cta">
            <div className="container">
                <h2>
                    {locale === "ar"
                        ? "ابدأ منصتك التعليمية اليوم"
                        : "Start Your Educational Platform Today"}
                </h2>

                <p>
                    {locale === "ar"
                        ? "تيتشاوي بتوفر لك طريقة بسيطة واحترافية عشان تحوّل خبرتك التعليمية إلى منصة كاملة باسمك، تجمع فيها دوراتك ومحتواك، وتقدّمها لطلابك بشكل منظم وواضح."
                        : "Teachawy provides you with a simple and professional way to turn your educational expertise into a complete branded platform where you can host your courses, organize your content, and deliver it clearly to your students."}
                </p>

                <a href="#">
                    {locale === "ar" ? "ابدأ الآن" : "Get Started"}
                </a>
            </div>
        </div>
    );
};


export default Cta;