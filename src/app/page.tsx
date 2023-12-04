import {
    CalendarIcon,
    CloseIcon,
    Logo,
    MenuIcon,
    SearchIcon,
} from "@/assets/icons/icon";
import Culture from "../assets/images/rectangle-31.png";
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
                <div className="welcome-title-slide-wrapper full-width full-height d-flex justify-content-space-between align-items-start flex-direction--column">
                    <div className="welcome-section-wrapper full-width d-flex align-items-center full-height flex-direction--column pt-120">
                        <p className="welcome-text font-size-24 font-weight--400 text-align--center">
                            Welcome to
                        </p>
                        <p className="mannkibata-text font-size-60 font-weight--700">
                            #MannKiBata
                        </p>
                    </div>
                    <div className="slider-content-wrapper d-flex align-items-end justify-content--center">
                        <div className="feature-blog-wrapper d-flex align-items-center">
                            <p className="feature-text">Featured Blogs</p>
                            <div className="feature-design"></div>
                        </div>
                        <div className="blog-slider-description d-flex justify-content--center align-items-end">
                            <p className="slider-description-text">
                                Bless me into <span>Usefulness</span> . <br />
                                May you all be blessed into Usefulness.
                            </p>
                            <p className="double-quotes d-flex justify-content--center align-items-end">
                                ”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-tabs-content-section container d-flex flex-direction--column pb-100 pt-130">
                <div className="blog-tabs-wrapper d-flex">
                    <ul className="tabs-list-wrapper d-flex">
                        <li className="tabs-list">
                            <a className="list">All</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">Culture</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">Food</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">Festivals</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">History</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">Local Stories</a>
                        </li>
                        <li className="tabs-list">
                            <a className="list">My Work</a>
                        </li>
                    </ul>
                </div>
                <div className="blogs-wrapper full-width">
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content-wrapper position--relative">
                        <Image
                            src={Culture}
                            // width={100}
                            height={400}
                            alt="Culture"
                        />
                        <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                            <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                <p
                                    className="blog-type-text border-radius-10 font-weight--400 d-flex
                                    align-items-center justify-content--center font-size-12"
                                >
                                    Culture
                                </p>
                            </div>
                            <div className="blog-title-date-wrapper">
                                <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                    Chumphu Nye - Between sky & earth
                                </h2>
                                <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                    <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                        <CalendarIcon />
                                        <p className="date-text font-size-16 font-weight--400">
                                            Nov 27, 2023
                                        </p>
                                        /
                                        <p className="reade-time-text">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interested-section d-flex justify-content--center align-items-center">
                <div className="text-interested-wrapper">
                    <p className="updates-text">
                        Get Updates on My Recent Experiences?
                    </p>
                </div>
            </div>
        </>
    );
}
