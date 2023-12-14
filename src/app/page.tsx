'use client';
import BlogCard from '@/components/blogCard';
import Footer from '@/components/footer';
import Subscribe from '@/components/subscribe';
import Tabs from '@/components/tabs';
import TopBanner from '@/components/topBanner';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReactPaginate from 'react-paginate';
import { API_CONFIG, HttpService } from '../services/http.service';
import LightHeader from '@/components/header';

const Home = () => {
	const [headerChange, setHeaderChange] = useState(false);
	const [categoriesList, setCategoriesList] = useState([]);
	const [featuredArticlesList, setFeaturedArticlesList] = useState<ArticleInfo[]>([]);
	const [articlesList, setArticlesList] = useState<ArticleInfo[]>([]);
	const [activeTab, setActiveTab] = useState<string>('ALL');
	const [subscribeUserEmail, setSubscribeUserEmail] = useState<string>('');
	const [pagination, setPagination] = useState({
		page: 1,
		pageCount: 1,
		pageSize: 2
	});

	useEffect(() => {
		getCategoriesData();
		getArticlesInfo();
		getFeaturedArticlesInfo();
	}, []);

	useEffect(() => {
		getCategoriesData();
		getArticlesInfo();
	}, []);

	useEffect(() => {
		getArticlesInfo();
	}, [activeTab]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () => setHeaderChange(window.pageYOffset > window.innerHeight));
		}
	}, []);

	const getCategoriesData = () => {
		HttpService.get(API_CONFIG.path.categories)
			.then((response: any) => {
				const categoriesData = response.data.map((item: any) => item.attributes.title);
				categoriesData.unshift('ALL');
				setCategoriesList(categoriesData);
			})
			.catch((e) => {
				console.log(e);
			});
	};
	const getArticlesInfo = (page = 1) => {
		let params;
		if (activeTab === 'ALL') {
			params = `?populate=*&pagination[page]=${page}&pagination[pageSize]=${pagination.pageSize}`;
		} else {
			params = `?populate=*&pagination[page]=${page}&pagination[pageSize]=${pagination.pageSize}&filters[categories][title][$eqi]=${activeTab}`;
		}
		HttpService.get(`${API_CONFIG.path.articles}${params}`)
			.then((response: any) => {
				setArticlesList(response.data);
				if (response.meta.pagination.pageCount === 0) {
					setPagination({ ...pagination, pageCount: 1 });
				} else {
					setPagination(response.meta.pagination);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const getFeaturedArticlesInfo = () => {
		HttpService.get(
			`${API_CONFIG.path.articles}?populate=*&pagination[page]=1&pagination[pageSize]=4&filters[featured][$eqi]=true&sort[0]=createdAt:desc`
		)
			.then((response: any) => {
				setFeaturedArticlesList(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const subscribeUser = () => {
		if (subscribeUserEmail) {
			const payload = {
				data: {
					email: subscribeUserEmail
				}
			};
			HttpService.post(API_CONFIG.path.subscribeUsers, payload)
				.then(() => {
					toast.success('Successfully subscribed');
					setSubscribeUserEmail('');
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

	const handlePageClick = (page: number) => {
		if (page) {
			getArticlesInfo(page);
		}
	};

	return (
		<>
			<LightHeader />
			{/* {headerChange ? <DarkHeader /> : <LightHeader />} */}
			<TopBanner featuredArticlesList={featuredArticlesList} />
			<div id="blog" className="blog-tabs-content-section container d-flex flex-direction--column pb-100 pt-130">
				{categoriesList.length > 0 && <Tabs tabs={categoriesList} activeTab={activeTab} handleTabChange={handleTabChange} />}
				<BlogCard articlesList={articlesList} />
				<ReactPaginate
					className="pagination-wrapper"
					breakLabel="..."
					nextLabel=">"
					pageRangeDisplayed={2}
					marginPagesDisplayed={1}
					pageCount={pagination.pageCount}
					previousLabel="<"
					onPageChange={(e) => handlePageClick(e.selected + 1)}
				/>
			</div>
			<Subscribe subscribeUserEmail={subscribeUserEmail} handleOnChange={handleOnChange} subscribeUser={subscribeUser} />
		</>
	);
};

export default Home;
