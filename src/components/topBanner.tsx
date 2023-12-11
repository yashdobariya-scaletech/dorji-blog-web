import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopBanner = () => {
    const [nav1, setNav1] = useState(null as any);
    const [nav2, setNav2] = useState(null as any);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 1500,
        fade: true,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        arrows: false,
        speed: 1500,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
    };
    const demo = [
        {
            id: "title-1",
            imgUrl: "https://delta-x.in/images/slider-one.png",
            color: "red",
        },
        {
            id: "title-2",
            imgUrl: "https://delta-x.in/images/slider-two.png",
            color: "green",
        },
        {
            id: "title-3",
            imgUrl: "https://delta-x.in/images/slider-three.png",
            color: "blue",
        },
    ];
    return (
        <div className="top-banner-section position--relative ">
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider1 !== null ? slider1 : undefined}
            >
                {demo.map((demoContent) => {
                    return (
                        <div
                            className="banner-section-bg-img position--absolute top--0 left--0 full-width full-height"
                            key={demoContent.id}
                        >
                            <div
                                style={{
                                    color: "white",
                                    backgroundImage: `url(${demoContent?.imgUrl})`,
                                    backgroundPosition: " bottom center",
                                    backgroundSize: "cover",
                                }}
                            ></div>
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
                        <p className="feature-text font-weight--600 font-size-20">
                            Featured Blogs
                        </p>
                        <div className="feature-design"></div>
                    </div>
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider2}
                    >
                        <div className="blog-slider-description d-flex justify-content--flex-start align-items-end">
                            <p className="slider-description-text font-size-22">
                                Bless me into{" "}
                                <span className="font-weight--600">
                                    Usefulness
                                </span>{" "}
                                . <br />
                                May you all be blessed into Usefulness.
                            </p>
                            <p className="double-quotes d-flex justify-content--center align-items-end">
                                ”
                            </p>
                        </div>
                        <div className="blog-slider-description d-flex justify-content--flex-start align-items-end">
                            <p className="slider-description-text font-size-22">
                                Bless me into{" "}
                                <span className="font-weight--600">
                                    Usefulness
                                </span>{" "}
                                . <br />
                                May you all be blessed into Usefulness.
                            </p>
                            <p className="double-quotes d-flex justify-content--center align-items-end">
                                ”
                            </p>
                        </div>
                        <div className="blog-slider-description d-flex justify-content--flex-start align-items-end">
                            <p className="slider-description-text font-size-22">
                                Bless me into{" "}
                                <span className="font-weight--600">
                                    Usefulness
                                </span>{" "}
                                . <br />
                                May you all be blessed into Usefulness.
                            </p>
                            <p className="double-quotes d-flex justify-content--center align-items-end">
                                ”
                            </p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
