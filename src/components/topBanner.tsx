import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Props {
    featuredArticlesList: ArticleInfo[];
}

const TopBanner: React.FC<Props> = (props) => {
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
        fade: true,
        speed: 1500,
        asNavFor: ".slider-nav",
    };

    const settingsThumbs = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
    };

    return (
        <div className="top-banner-section position--relative ">
            <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={slider1 !== null ? slider1 : undefined}
            >
                {props.featuredArticlesList &&
                    props.featuredArticlesList.length > 0 &&
                    props.featuredArticlesList?.map(
                        (item: any, index: number) => {
                            return (
                                <div
                                    className="banner-section-bg-img position--absolute top--0 left--0 full-width full-height"
                                    key={index}
                                >
                                    <div
                                        style={{
                                            color: "white",
                                            backgroundImage: `url(http://192.168.1.97:1337${item.attributes.previewImage.data.attributes.url})`,
                                            backgroundPosition: "center center",
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor:
                                                    "rgba(0, 0, 0, 0.40)",
                                                backdropFilter: "blur(2px)",
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        }
                    )}
            </Slider>
            <div className="welcome-title-slide-wrapper position--absolute top--0 left--0 full-width full-height d-flex justify-content-space-between align-items-start flex-direction--column">
                <div className="welcome-section-wrapper full-width d-flex align-items-center full-height flex-direction--column pt-120">
                    <p className="welcome-text font-size-24 font-weight--400 text-align--center">
                        Welcome to
                    </p>
                    <p className="mannkibata-text font-size-60 font-weight--700 d-flex">
                        Mannki
                        <span>
                            <TypeAnimation
                                sequence={[
                                    "बात",
                                    2000, // Waits 2s
                                    "Baat",
                                    4000, // Waits 4s
                                    // () => {
                                    //     console.log("Sequence completed");
                                    // },
                                ]}
                                wrapper="span"
                                cursor={false}
                                repeat={Infinity}
                                style={{
                                    background: "#C93E29",
                                    paddingRight: "5px",
                                }}
                            />
                        </span>
                    </p>
                </div>
                <div className="slider-content-wrapper d-flex align-items-end justify-content--center">
                    <div className="feature-blog-wrapper d-flex align-items-center">
                        <p className="feature-text font-size-22 font-weight--400">
                            Featured Blogs
                        </p>
                        <div className="feature-design"></div>
                    </div>
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider2}
                    >
                        {props.featuredArticlesList &&
                            props.featuredArticlesList.length > 0 &&
                            props.featuredArticlesList.map(
                                (item: any, index: number) => {
                                    return (
                                        <>
                                            <Link
                                                key={index}
                                                href={`article/${item.id}`}
                                            >
                                                <div className="blog-slider-description d-flex justify-content--flex-start align-items-end">
                                                    <p className="slider-description-text font-size-25">
                                                        {item.attributes.title}
                                                    </p>
                                                    <p className="double-quotes d-flex justify-content--center align-items-end">
                                                        ”
                                                    </p>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                }
                            )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
