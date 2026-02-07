import Wave from "@/components/Wave/Wave";
import "./WhatWeOffer.scss";
import Image from "next/image";

interface Props {
    locale: string
}

const WhatWeOffer = ({ locale }: Props) => {
    const features = [
        {
            image: "/images/web-site.png",
            title: locale === "ar" ? 'موقع احترافي' : 'Professional Website',
            desc: locale === "ar"
                ? 'منصة بتصميم عصري وسريع تديك حضور قوي قدّام طلابك.'
                : 'A modern, fast platform that gives you a strong online presence.',
        },
        {
            image: "/images/management.png",
            title: locale === "ar" ? 'تحكم وإدارة سهلة' : 'Easy Management & Control',
            desc: locale === "ar"
                ? 'لوحة تحكم بسيطة لإدارة المحتوى والكورسات بكل سهولة.'
                : 'A simple dashboard to manage content and courses easily.',
        },
        {
            image: "/images/communication.png",
            title: locale === "ar" ? 'متابعة وتواصل' : 'Tracking & Communication',
            desc: locale === "ar"
                ? 'متابعة الطلاب وأولياء الأمور مع تواصل سريع من لوحة التحكم.'
                : 'Track students and communicate easily from one dashboard.',
        },
        {
            image: "/images/performance.png",
            title: locale === "ar" ? 'أداء وسعر مناسب' : 'High Performance & Fair Pricing',
            desc: locale === "ar"
                ? 'أداء عالي يساعدك على الظهور بشكل أفضل بسعر مناسب.'
                : 'High performance that boosts visibility at an affordable price.',
        },
    ]

    return (
        <div className="what-we-offer">
            <Wave />

            <div className="content">
                <div className="container">
                    <h2>
                        {locale === "ar" ? "ايه اللى تيتشاوي بيقدمهولك ؟" : "What does Teachawy offer you?"}
                    </h2>

                    <div className="items">
                        {features.map((el, idx) => (
                            <div className="box" key={idx}>
                                <div className="image">
                                    <Image
                                        src={el.image}
                                        alt={el.title}
                                        width={200}
                                        height={200}
                                        sizes="(max-width: 767px) 120px, 200px"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>

                                <h4>{el.title}</h4>
                                <p>{el.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeOffer;