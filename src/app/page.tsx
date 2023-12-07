"use client";
import BlogCard from "@/components/blogCard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Subscribe from "@/components/subscribe";
import Tabs from "@/components/tabs";
import TopBanner from "@/components/topBanner";
import { useEffect, useState } from "react";
import { API_CONFIG, HttpService } from "../services/http.service";

const Home = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [articlesList, setArticlesList] = useState({} as any);
  const [activeTab, setActiveTab] = useState<string>("ALL");

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

  const handleTabChange = (incomingTab: string) => {
    setActiveTab(incomingTab);
  };

  return (
    <>
      <Header />
      <TopBanner />
      <div className='blog-tabs-content-section container d-flex flex-direction--column pb-100 pt-130'>
        {categoriesList.length > 0 && (
          <Tabs
            tabs={categoriesList}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        )}
        <BlogCard articlesList={articlesList.data} />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
