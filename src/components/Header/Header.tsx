'use client';
import "./Header.scss"
import Image from "next/image";
import LogoAR from "../../../public/images/logo_ar.png"
import LogoEN from "../../../public/images/logo_en.png"
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu } from "lucide-react";

const Header = () => {
    const t = useTranslations('navLins');
    const pathname = usePathname();
    const locale = useLocale();
    const [showLang, setShowLang] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const menuRef = useRef<HTMLLIElement>(null);
    const menuLinksRef = useRef<HTMLLIElement>(null);
    const btnMenuRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: { target: unknown; }) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowLang(false);
            }
            if (btnMenuRef.current
                && menuLinksRef.current
                && !btnMenuRef.current.contains(event.target as Node)
                && !menuLinksRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="logo">
                    <Image
                        src={locale === "ar" ? LogoAR : LogoEN}
                        alt="logo"
                        width={140}
                        height={70}
                        priority
                        style={{ objectFit: "contain" }}
                    />
                </Link>

                <nav className={`${openMenu ? "open" : ""}`} ref={menuLinksRef}>
                    <ul>
                        <li>
                            <Link href="/" onClick={() => setOpenMenu(false)}>{t('home')}</Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setOpenMenu(false)}>{t('about')}</Link>
                        </li>
                        <li>
                            <Link href="/pricing" onClick={() => setOpenMenu(false)}>{t('pricing')}</Link>
                        </li>
                        <li>
                            <Link href="/how-it-works" onClick={() => setOpenMenu(false)}>{t('how_it_works')}</Link>
                        </li>
                        <li>
                            <Link href="/blogs" onClick={() => setOpenMenu(false)}>{t('blogs')}</Link>
                        </li>
                        <li className="lang" ref={menuRef}>
                            <button onClick={() => setShowLang(prev => !prev)}>
                                <ChevronDown size={22} /> {locale === "ar" ? "العربية" : "English"}
                            </button>

                            {showLang &&
                                <div className="menu-lang">
                                    {locale === "en" ?
                                        <Link href={pathname} locale="ar" onClick={() => setOpenMenu(false)}>
                                            <span>العربية</span> <Globe size={18} />
                                        </Link>
                                        :
                                        <>
                                            <Link href={pathname} locale="en" onClick={() => setOpenMenu(false)}>
                                                <span>English</span> <Globe size={18} />
                                            </Link>
                                        </>
                                    }
                                </div>
                            }
                        </li>
                    </ul>
                </nav>

                <button
                    ref={btnMenuRef}
                    className="menu"
                    onClick={() => setOpenMenu(prev => !prev)}
                >
                    <Menu />
                </button>

                <a href="#">{t("start_now")}</a>
            </div>
        </header>
    );
}

export default Header;