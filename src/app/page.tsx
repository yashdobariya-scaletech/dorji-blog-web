"use client";
import BlogCard from "@/components/blogCard";
import Footer from "@/components/footer";
import { DarkHeader, LightHeader } from "@/components/header";
import Subscribe from "@/components/subscribe";
import Tabs from "@/components/tabs";
import TopBanner from "@/components/topBanner";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API_CONFIG, HttpService } from "../services/http.service";

const Home = () => {
    const [categoriesList, setCategoriesList] = useState([]);
    const [articlesList, setArticlesList] = useState({} as any);
    const [activeTab, setActiveTab] = useState<string>("ALL");
    const [subscribeUserEmail, setSubscribeUserEmail] = useState<string>("");
    const [headerChange, setHeaderChange] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setHeaderChange(window.pageYOffset > window.innerHeight)
            );
        }
    }, []);

    useEffect(() => {
        getCategoriesData();
        getArticlesInfo();
    }, []);

    useEffect(() => {
        getArticlesInfo();
    }, [activeTab]);

    const getCategoriesData = () => {
        HttpService.get(API_CONFIG.path.categories)
            .then((response: any) => {
                const categoriesData = response.data.map(
                    (item: any) => item.attributes.title
                );
                categoriesData.unshift("ALL");
                setCategoriesList(categoriesData);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const getArticlesInfo = () => {
        let params;
        if (activeTab === "ALL") {
            params = "";
        } else {
            params = `&filters[categories][title][$eqi]=${activeTab}`;
        }
        HttpService.get(`${API_CONFIG.path.articles}${params}`)
            .then((response: any) => {
                setArticlesList(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const subscribeUser = () => {
        if (subscribeUserEmail) {
            const payload = {
                data: {
                    email: subscribeUserEmail,
                },
            };
            HttpService.post(API_CONFIG.path.subscribeUsers, payload)
                .then(() => {
                    toast.success("Successfully subscribed");
                    setSubscribeUserEmail("");
                })
                .catch((e) => {
                    toast.error(e.response.data.error.message);
                });
        }
    };

    const handleTabChange = (incomingTab: string) => {
        if (incomingTab) {
            setActiveTab(incomingTab);
        }
    };

    const handleOnChange = (e: any) => {
        if (e.target.value) {
            setSubscribeUserEmail(e.target.value);
        }
    };

    return (
        <>
            {headerChange ? <DarkHeader /> : <LightHeader />}
            <TopBanner />
            <div
                id="blog"
                className="blog-tabs-content-section container d-flex flex-direction--column pb-100 pt-130"
            >
                {categoriesList.length > 0 && (
                    <Tabs
                        tabs={categoriesList}
                        activeTab={activeTab}
                        handleTabChange={handleTabChange}
                    />
                )}
                <BlogCard articlesList={articlesList.data} />
            </div>
            <Subscribe
                subscribeUserEmail={subscribeUserEmail}
                handleOnChange={handleOnChange}
                subscribeUser={subscribeUser}
            />
            <Footer />
        </>
    );
};

export default Home;
