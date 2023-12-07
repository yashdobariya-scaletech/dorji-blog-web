"use client";
import {
    CalendarIcon,
    CloseIcon,
    FacebookIcon,
    FooterLogo,
    Logo,
    MenuIcon,
    SearchIcon,
    TwitterIcon,
} from "@/assets/icons/icon";
import Culture from "../assets/images/rectangle-31.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { SassColor } from "sass";

export default function Home() {
    let [nav1, setNav1] = useState(null);
    let [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        arrows: false,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        // focusOnSelect: true,
        // centerPadding: "10px",
    };
    const demo = [
        {
            id: "title-1",
            imgUrl: "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape",
            color: "red",
        },
        {
            id: "title-2",
            imgUrl: "https://www.gstatic.com/webp/gallery3/2.png",
            color: "green",
        },
        {
            id: "title-3",
            imgUrl: "https://source.unsplash.com/random/1920x1080/?wallpaper,landscape",
            color: "blue",
        },
    ];
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

            <div className="top-banner-section position--relative pt-85">
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                >
                    {demo.map((demoContent) => {
                        console.log(demoContent.color);
                        return (
                            <div
                                className="banner-section-bg-img position--absolute top--0 left--0 full-width full-height"
                                key={demoContent.id}
                            >
                                <div
                                    style={{
                                        color: "white",
                                        backgroundImage: `url(${demoContent.imgUrl})`,
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "white",
                                        }}
                                    >
                                        {demoContent.id}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
                <div className="welcome-title-slide-wrapper position--absolute top--0 left--0 full-width full-height d-flex justify-content-space-between align-items-start flex-direction--column">
                    <div className="welcome-section-wrapper full-width d-flex align-items-center full-height flex-direction--column pt-120">
                        <p className="welcome-text font-size-24 font-weight--400 text-align--center">
                            Welcome to
                        </p>
                        <p className="mannkibata-text font-size-60 font-weight--700">
                            #MannKiBaat
                        </p>
                    </div>

                    <div className="slider-content-wrapper d-flex align-items-end justify-content--center">
                        <div className="feature-blog-wrapper d-flex align-items-center">
                            <p className="feature-text">Featured Blogs</p>
                            <div className="feature-design"></div>
                        </div>
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={(slider) => (sliderRef2 = slider)}
                        >
                            <div className="blog-slider-description d-flex justify-content--center align-items-end">
                                <p className="slider-description-text">
                                    Bless me into <span>Usefulness</span> .{" "}
                                    <br />
                                    May you all be blessed into Usefulness.
                                </p>
                                <p className="double-quotes d-flex justify-content--center align-items-end">
                                    ”
                                </p>
                            </div>
                            <div className="blog-slider-description d-flex justify-content--center align-items-end">
                                <p className="slider-description-text">
                                    Bless me into <span>Usefulness</span> .{" "}
                                    <br />
                                    May you all be blessed into Usefulness.
                                </p>
                                <p className="double-quotes d-flex justify-content--center align-items-end">
                                    ”
                                </p>
                            </div>
                            <div className="blog-slider-description d-flex justify-content--center align-items-end">
                                <p className="slider-description-text">
                                    Bless me into <span>Usefulness</span> .{" "}
                                    <br />
                                    May you all be blessed into Usefulness.
                                </p>
                                <p className="double-quotes d-flex justify-content--center align-items-end">
                                    ”
                                </p>
                            </div>
                        </Slider>
                    </div>
                    {/* {demo.map((demoContent) => {
                            return (
                                <div
                                    key={demoContent.id}
                                    style={{
                                        color: "white",
                                        backgroundColor: "red",
                                    }}
                                >
                                    {demoContent.id}
                                </div>
                            );
                        })} */}
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
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
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}
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
                                        <p className="reade-time-text ">
                                            2 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="interested-section d-flex justify-content--center align-items-center pr-20 pl-20">
                <div className="text-interested-wrapper d-flex justify-content-space-between align-items-center">
                    <p className="updates-text font-weight--400 font-size-24">
                        Get Updates on My Recent Experiences?
                    </p>
                    <form className="interested-form d-flex">
                        <input
                            type="email"
                            className="input-your-email-address border-radius-15 pr-20 pl-20 pt-10 pb-10 font-size-14 font-weight--400"
                            placeholder="Enter email address here"
                        />
                        <button className="email-sand-btn border-radius-10 font-size-14 font-weight--600">
                            Yes, I am interested
                        </button>
                    </form>
                </div>
            </div>
            <footer className="footer-section">
                <div className="footer-container full-height d-flex justify-content-center align-items-center">
                    <div className="footer-wrapper full-width d-flex justify-content-space-between align-items-center">
                        <div className="footer-logo-nav-links-wrapper d-flex">
                            <div className="footer-logo-wrapper d-flex ">
                                <FooterLogo />
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
                                        <a className="footer-links">Home</a>
                                    </li>
                                    <li className="footer-nav-links">
                                        <a className="footer-links">Blogs</a>
                                    </li>
                                    <li className="footer-nav-links">
                                        <a className="footer-links">About Me</a>
                                    </li>
                                    <li className="footer-nav-links">
                                        <a className="footer-links">
                                            Contact Me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-social-text-wrapper d-flex flex-direction--column">
                            <p className="social-text">Follow me on</p>
                            <div className="social-wrapper d-flex">
                                <FacebookIcon />
                                <TwitterIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
