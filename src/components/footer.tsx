'use client'
import { FacebookIcon, FooterLogo, TwitterIcon } from "@/assets/icons/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className="footer-section">
            <div className="container full-height d-flex justify-content-center align-items-center">
                <div className="footer-wrapper full-width d-flex justify-content-space-between align-items-center">
                    <div className="footer-logo-wrapper d-flex ">
                        <Link href={"/"}>
                            <FooterLogo />
                        </Link>
                        <div className="mannkibaat-by-wrapper d-flex flex-direction--column">
                            <p className="mannkibaat-by-text font-size-16 font-weight--400">
                                #MannKiBaat by
                            </p>
                            <p className="mannkibaat-by-name-text font-size-30 font-weight--400">
                                Dorji Wangchuk
                            </p>
                        </div>
                    </div>
                    <div className="nav-links-wrapper d-flex align-items-end">
                        <ul className="footer-nav-list d-flex align-items-end">
                            <li className="footer-nav-links">
                                <Link
                                    href={"/"}
                                    className={`footer-links cursor-pointer  ${pathname === '/' ? "active-footer-nav-links" : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="footer-nav-links">
                                <Link href={'/about-me'} className={`footer-links cursor-pointer ${pathname === '/about-me' ? "active-footer-nav-links" : ''}`}>About Me</Link>
                            </li>
                            <li className="footer-nav-links">
                                <a className="footer-links">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-social-text-wrapper d-flex flex-direction--column">
                        <p className="social-text font-weight--400 font-size-16">
                            Follow me on
                        </p>
                        <div className="social-wrapper d-flex">
                            <FacebookIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
