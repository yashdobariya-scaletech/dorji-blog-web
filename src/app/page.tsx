import { CloseIcon, Logo, MenuIcon, SearchIcon } from "@/assets/icons/icon";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <header className="header-container pb-20 pt-20 d-flex align-items-center justify-content-space-between ">
                <div className="container d-flex justify-content-space-between align-items-center">
                    <div className="logo-nav_links-wrapper d-flex align-items-center">
                        <div className="logo-wrapper">
                            <Logo />
                        </div>
                        <div className="nav_links-wrapper">
                            <nav className="navbar d-flex">
                                <a
                                    href="#"
                                    className="nav-links pt-10 pb-10"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="nav-links pt-10 pb-10"
                                >
                                    Blogs
                                </a>
                                <a
                                    href="#"
                                    className="nav-links pt-10 pb-10"
                                >
                                    About Me
                                </a>
                                <a
                                    href="#"
                                    className="nav-links pt-10 pb-10"
                                >
                                    Contact Me
                                </a>
                            </nav>
                        </div>
                    </div>

                    <div className="search-wrapper d-flex justify-content-space-between align-items-center pt-10 pb-10 pl-20 pr-20 border-radius-15 d-flex">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input full-width"
                        />
                        <SearchIcon />
                    </div>
                    <div className="sidenav-icon-wrapper display-none cursor-pointer">
                        <MenuIcon />
                    </div>
                </div>
            </header>
            <div className="display-none sidenav-mobile-wrapper d-flex justify-content-end position--fixed top--0 right--0">
                <div className="sidenav">
                    <div className="close-icon-wrapper position--absolute top--20 right--20">
                        <CloseIcon />
                    </div>
                    <ul className="mt-50">
                        <li className="sidenav-links">Home</li>
                        <li className="sidenav-links">Blogs</li>
                        <li className="sidenav-links">About Me</li>
                        <li className="sidenav-links">Contact Me</li>
                    </ul>
                </div>
            </div>
            <div className="top-banner-section pt-85">
                <div className="welcome-title-slide-wrapper full-width full-height d-flex">
                    <div className="welcome-section-wrapper full-width d-flex align-items-center full-height flex-direction--column pt-120">
                        <p className="welcome-text font-size-24 font-weight--400 text-align--center">
                            Welcome to
                        </p>
                        <p className="mannkibata-text font-size-60 font-weight--700">
                            #MannKiBata
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
