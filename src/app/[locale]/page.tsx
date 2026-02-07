import type { Metadata } from 'next'
import Cta from "@/components/Cta/Cta";
import OnePlatform from "@/components/Home/OnePlatform/OnePlatform";
import Reviews from "@/components/Home/Reviews/Reviews";
import Welcome from "@/components/Home/Welcome/Welcome";
import WhatWeOffer from "@/components/Home/WhatWeOffer/WhatWeOffer";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Statistics from "@/components/Statistics/Statistics";

interface Props {
    params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const isArabic = locale === 'ar'

    return {
        title: isArabic
            ? 'تيتشاوي | منصة تعليمية لإدارة الدروس والطلاب'
            : 'Teachawy | Educational Platform for Managing Learning',

        description: isArabic
            ? 'تيتشاوي منصة تعليمية تساعد المدرسين والأكاديميات على إنشاء وإدارة منصاتهم التعليمية بسهولة، متابعة الطلاب، وتنظيم المحتوى في مكان واحد.'
            : 'Teachawy is an educational platform that helps teachers and academies create and manage their learning platforms, track students, and organize content easily.',

        keywords: isArabic
            ? [
                'منصة تعليمية',
                'منصة للمدرسين',
                'إدارة الطلاب',
                'منصة دروس أونلاين',
                'منصة تعليم إلكتروني',
                'تيتشاوي',
            ]
            : [
                'educational platform',
                'online learning platform',
                'teacher platform',
                'student management system',
                'e-learning platform',
                'Teachawy',
            ],
    }
}

export default async function Home({ params }: Props) {
    const { locale } = await params

    return (
        <div className="home">
            <Welcome locale={locale} />
            <OnePlatform locale={locale} />
            <WhatWeOffer locale={locale} />
            <Statistics locale={locale} />
            <WhyChooseUs locale={locale} />
            <Reviews locale={locale} />
            <Cta locale={locale} />
        </div>
    );
}
