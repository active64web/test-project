import Goals from "@/components/About/Goals/Goals";
import IdeaTeachawy from "@/components/About/IdeaTeachawy/IdeaTeachawy";
import IntegratedSolution from "@/components/About/IntegratedSolution/IntegratedSolution";
import Welcome from "@/components/About/Welcome/Welcome";
import Cta from "@/components/Cta/Cta";

interface Props {
    params: Promise<{ locale: string }>
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