"use client"
import "./Footer.scss";
import Image from "next/image";

import LogoAR from "../../../public/images/logo_ar.png"
import LogoEN from "../../../public/images/logo_en.png"

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const Footer = () => {
    const locale = useLocale();

    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="logo">
                            <Image
                                src={locale === "ar" ? LogoAR : LogoEN}
                                alt="logo"
                                width={180}
                                height={100}
                                priority
                                style={{ objectFit: "contain" }}
                            />
                        </div>

                        <div className="social">
                            <a href="#">
                                <Image src="/icons/facebook.svg" alt="facebook" width={25} height={25} />
                            </a>
                            <a href="#">
                                <Image src="/icons/linkedIn.svg" alt="linkedIn" width={25} height={25} />
                            </a>
                            <a href="#">
                                <Image src="/icons/whatsApp.svg" alt="whatsApp" width={25} height={25} />
                            </a>
                            <a href="#">
                                <Image src="/icons/youtube.svg" alt="youtube" width={25} height={25} />
                            </a>
                        </div>
                    </div>

                    <div className="col">
                        <h3>{locale === "ar" ? "نبذة عنا" : "About Us"}</h3>
                        <ul>
                            <li>
                                <Link href="">{locale === "ar" ? "من نحن" : "Who We Are"}</Link>
                            </li>
                            <li>
                                <Link href="">{locale === "ar" ? "الأسعار" : "Pricing"}</Link>
                            </li>
                            <li>
                                <Link href="">{locale === "ar" ? "المقالات" : "Articles"}</Link>
                            </li>
                            <li>
                                <Link href="">
                                    {locale === "ar" ? "كيف تعمل المنصة؟" : "How It Works"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>{locale === "ar" ? "الدعم" : "Support"}</h3>
                        <ul>
                            <li>
                                <Link href="">
                                    {locale === "ar" ? "مركز المساعدة" : "Help Center"}
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    {locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    {locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <p>
                            {locale === "ar"
                                ? "انضم إلى نشرتنا الإخبارية"
                                : "Join our newsletter"}
                        </p>
                        <form>
                            <input
                                type="text"
                                placeholder={
                                    locale === "ar"
                                        ? "أدخل عنوان بريدك الإلكتروني"
                                        : "Enter your email address"
                                }
                            />
                            <button>
                                {locale === "ar" ? "إرسال" : "Send"}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="copyright">
                    <p>
                        {locale === "ar"
                            ? "جميع الحقوق محفوظة"
                            : "All rights reserved"}{" "}
                        &copy; 2026
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Footer;