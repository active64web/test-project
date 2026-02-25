import Goals from "@/components/About/Goals/Goals";
import IdeaTeachawy from "@/components/About/IdeaTeachawy/IdeaTeachawy";
import IntegratedSolution from "@/components/About/IntegratedSolution/IntegratedSolution";
import Welcome from "@/components/About/Welcome/Welcome";
import Cta from "@/components/Cta/Cta";
import { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const isAr = locale === "ar";

    return {
        title: isAr
            ? "من نحن | تيتشاوي"
            : "About Us | Teachawy",

        description: isAr
            ? "تعرّف على تيتشاوي، المنصة التعليمية التي تهدف إلى تمكين المدرسين والأكاديميات من إنشاء وإدارة منصاتهم التعليمية باحترافية وسهولة."
            : "Learn more about Teachawy, the educational platform dedicated to empowering teachers and academies to build and manage their learning platforms professionally and with ease.",

        keywords: isAr
            ? [
                "من نحن تيتشاوي",
                "عن تيتشاوي",
                "منصة تعليمية",
                "منصة للمدرسين",
                "إدارة التعليم",
                "تيتشاوي",
            ]
            : [
                "about Teachawy",
                "Teachawy platform",
                "educational platform",
                "teacher platform",
                "e-learning solution",
                "Teachawy",
            ],
    };
}

export default async function About({ params }: Props) {
    const { locale } = await params

    return (
        <div className="home">
            <Welcome locale={locale} />
            <Goals locale={locale} />
            <IntegratedSolution locale={locale} />
            <IdeaTeachawy locale={locale} />
            <Cta locale={locale} />
        </div>
    );
}