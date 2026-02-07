import Image from "next/image";
import "./WhyChooseUs.scss";

interface Props {
    locale: string
}

const WhyChooseUs = ({ locale }: Props) => {

    const list = [
        {
            title: locale === 'ar'
                ? 'منصة تعليمية لكل الأنشطة'
                : 'Educational Platform for All Activities',
            desc: locale === 'ar'
                ? 'حل واحد ينفع للمدرسين، الحضانات، والأكاديميات بمختلف أحجامها.'
                : 'One solution suitable for teachers, nurseries, and academies of all sizes.',
        },
        {
            title: locale === 'ar'
                ? 'نظام جاهز وسهل الاستخدام'
                : 'Ready & Easy-to-Use System',
            desc: locale === 'ar'
                ? 'كل اللي محتاجه لإدارة نشاطك التعليمي بدون تعقيد.'
                : 'Everything you need to manage your educational activity without complexity.',
        },
        {
            title: locale === 'ar'
                ? 'إدارة وتنظيم من مكان واحد'
                : 'Manage Everything in One Place',
            desc: locale === 'ar'
                ? 'تحكم في المحتوى والمتعلمين والتواصل معاهم من لوحة واحدة.'
                : 'Control content, learners, and communication from a single dashboard.',
        },
        {
            title: locale === 'ar'
                ? 'حل يكبر مع شغلك'
                : 'A Solution That Grows With You',
            desc: locale === 'ar'
                ? 'منصة مرنة تبدأ بسيطة وتكبر معاك حسب احتياجاتك.'
                : 'A flexible platform that starts simple and scales with your needs.',
        },
    ]

    return (
        <div className="why-choose-us">
            <div className="container">
                <div className="content">
                    <h2>
                        {locale === "ar" ? "ليه تختار تيتشاوي ؟" : "Why Choose Titchawi ?"}
                    </h2>

                    <ul className="list">
                        {list.map((el, idx) => (
                            <li key={idx}>
                                <span>{`0${idx + 1}`}</span>
                                <h4>{el.title}</h4>
                                <p>{el.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="image">
                    <Image
                        src="/images/my-answers.png"
                        alt="my-answers"
                        width={600}
                        height={500}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;