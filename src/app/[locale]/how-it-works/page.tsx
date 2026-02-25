import Image from "next/image";
import "./HowItWorks.scss";
import HeadPage from "@/components/HeadPage/HeadPage";
import { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const isAr = locale === 'ar'

    return {
        title: isAr
            ? "كيف تعمل المنصة | تيتشاوي"
            : "How It Works | Teachawy",

        description: isAr
            ? "تعرّف على خطوات استخدام تيتشاوي، بدءًا من التواصل معنا واختيار الباقة المناسبة، وحتى إنشاء منصتك التعليمية وتخصيصها والبدء في إدارتها بسهولة."
            : "Discover how Teachawy works, from contacting us and choosing the right plan to creating, customizing, and managing your educational platform with ease.",

        keywords: isAr
            ? [
                "كيف تعمل تيتشاوي",
                "خطوات إنشاء منصة تعليمية",
                "طريقة استخدام المنصة",
                "منصة للمدرسين",
                "إدارة الدروس والطلاب",
                "تيتشاوي",
            ]
            : [
                "how Teachawy works",
                "create educational platform steps",
                "online learning setup process",
                "teacher platform guide",
                "student management platform",
                "Teachawy",
            ],
    };
}

export default async function HowItWorks({ params }: Props) {
    const { locale } = await params
    const isAr = locale === 'ar'

    const steps = [
        {
            id: 1,
            img: "/images/contact-us.png",
            title: isAr ? "1 - تواصل معنا" : "1 - Contact Us",
            description: isAr
                ? "ابدأ رحلتك مع تيتشاوي من خلال التواصل معنا مباشرة عبر واتساب، حيث يقوم فريقنا بالإجابة على جميع استفساراتك ومساعدتك على فهم طريقة العمل واختيار الباقة المناسبة لك."
                : "Start your journey with Titchawi by contacting us directly via WhatsApp. Our team will answer all your questions and help you understand how the platform works and choose the right plan.",
        },
        {
            id: 2,
            img: "/images/plan-mode.png",
            title: isAr ? "2 - اختيار الباقة المناسبة" : "2 - Choose the Right Plan",
            description: isAr
                ? "اطّلع على باقات الأسعار المتاحة، ونقوم بشرح تفاصيل كل باقة وطريقة الاشتراك بشكل واضح وشفاف، حتى تختار ما يناسب احتياجاتك التعليمية بدون أي التزامات غير واضحة."
                : "Explore our available pricing plans. We clearly explain each plan and the subscription process so you can choose what fits your educational needs with full transparency.",
        },
        {
            id: 3,
            img: "/images/platform-account.png",
            title: isAr ? "3 - إنشاء حسابك على المنصة" : "3 - Create Your Platform Account",
            description: isAr
                ? "بعد إتمام الاشتراك، نقوم بإنشاء حسابك على منصة تيتشاوي وإرسال بيانات الدخول الخاصة بك عبر البريد الإلكتروني، بما يشمل رابط المنصة ولوحة التحكم وبيانات الدخول."
                : "After completing your subscription, we create your account on the Titchawi platform and send your login credentials via email, including the platform link and dashboard access.",
        },
        {
            id: 4,
            img: "/images/educational-platform.png",
            title: isAr ? "4 - تخصيص منصتك التعليمية" : "4 - Customize Your Educational Platform",
            description: isAr
                ? "من خلال لوحة التحكم، يمكنك تعديل اسم المنصة، والألوان، والصور، وكتابة نبذة تعريفية عنك، لتظهر منصتك بالشكل الذي يعكس هويتك التعليمية."
                : "Through your dashboard, you can customize your platform name, colors, images, and add a short bio to reflect your educational identity.",
        },
        {
            id: 5,
            img: "/images/your-work.png",
            title: isAr ? "5 - عرض أعمالك وإنجازاتك" : "5 - Showcase Your Work & Achievements",
            description: isAr
                ? "تتيح لك تيتشاوي إضافة صورك التعليمية، وشهاداتك، وتكريماتك، أو صور لطلابك داخل قسم مخصص (Gallery)، لإبراز خبرتك وبناء الثقة مع طلابك."
                : "Titchawi allows you to upload your educational photos, certificates, awards, or student work in a dedicated Gallery section to highlight your expertise and build trust.",
        },
        {
            id: 6,
            img: "/images/start-using.png",
            title: isAr ? "6 - ابدأ استخدام المنصة" : "6 - Start Using the Platform",
            description: isAr
                ? "بعد تجهيز منصتك، يمكنك استخدام جميع إمكانيات تيتشاوي بحرية، وإدارة محتواك وتحديث بياناتك في أي وقت من خلال لوحة تحكم بسيطة وسهلة الاستخدام."
                : "Once your platform is ready, you can freely use all Titchawi features, manage your content, and update your information anytime through a simple and user-friendly dashboard.",
        },
    ];

    return (
        <div className="how-it-works">
            <HeadPage>
                <h3>
                    {isAr ? "كيف تعمل منصة تيتشاوي؟"
                        : "How does the Teachawy platform work?"}
                </h3>
            </HeadPage>

            <div className="steps">
                <div className="container">
                    {steps.map(el => (
                        <div className="item" key={el.id}>
                            <div className="image">
                                <Image
                                    src={el.img}
                                    alt={`step-image-${el.id}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>

                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cta-page">
                <div className="container">
                    <h2>
                        {isAr
                            ? "جاهز تبدأ منصتك التعليمية مع تيتشاوي؟"
                            : "Ready to launch your educational platform with Teachawy?"}
                    </h2>

                    <p>
                        {isAr
                            ? "ابدأ بخطوات بسيطة وواضحة، وفريق تيتشاوي سيكون معك في كل مرحلة حتى تشغيل منصتك التعليمية بالكامل."
                            : "Start with simple and clear steps, and the Teachawy team will support you at every stage until your educational platform is fully launched."}
                    </p>

                    <a href="#">
                        {isAr ? "ابدأ الآن" : "Get Started"}
                    </a>
                </div>
            </div>
        </div>
    );
}