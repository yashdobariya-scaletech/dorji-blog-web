'use client';
import { CloseIcon, DarkLogo, DarkMenuIcon, DarkSearchIcon, LightLogo, LightMenuIcon } from '@/assets/icons/icon';
import { API_CONFIG, HttpService } from '@/services/http.service';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SearchArticle from './searchArticle';

// const handleOnHover = (result: any) => {
//   // the item hovered
//   console.log(result);
// };

// const handleOnSelect = (item: any) => {
// 	// the item selected
// 	console.log(item);
// 	console.log('yash');
// 	return <Link href={`article/${item.id}`}></Link>;
// };

// const handleOnFocus = () => {
//   console.log("Focused");
// };

const LightHeader = () => {
	const [searchArticlesList, setSearchArticlesList] = useState<ArticleInfo[]>([]);
	const router = useRouter();

	const handleOnSearch = (string: string) => {
		if (string) {
			HttpService.get(`${API_CONFIG.path.articles}?populate=*&filters[title][$containsi]=${string.trim()}`)
				.then((response: any) => {
					const articlesList =
						response.data &&
						response.data.length > 0 &&
						response.data.map(
							({
								id,
								attributes: {
									title,
									previewImage: {
										data: {
											attributes: { url }
										}
									}
								}
							}: ArticleInfo) => ({
								id,
								name: title,
								img: `http://192.168.1.97:1337${url}`
							})
						);
					setSearchArticlesList(articlesList);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};

	const formatResult = (item: any) => {
		return (
			<>
				<div className="d-flex cursor-pointer">
					<div className="w-[50] h-[50]">
						<Image
							width={50}
							height={50}
							src={item.img}
							style={{
								width: '50px',
								height: '50px',
								objectFit: 'cover'
							}}
							alt="Culture"
						/>
					</div>
					<p className="ml-20"> {item.name}</p>
				</div>
			</>
		);
	};
	console.log(searchArticlesList, 'searchArticlesList');

	return (
		<>
			<header className="header-container pb-20 pt-20 d-flex align-items-center justify-content-space-between">
				<div className="container d-flex justify-content-space-between align-items-center">
					<div className="logo-nav_links-wrapper d-flex align-items-center">
						<Link href={'/'}>
							<div className="logo-wrapper">
								<LightLogo />
							</div>
						</Link>
						<div className="nav_links-wrapper">
							<nav className="navbar d-flex">
								<Link href={'/'} className="nav-links active-light-header-nav-links pt-10 pb-10">
									Home
								</Link>
								<Link href={'/#blog'} className="nav-links pt-10 pb-10">
									Blogs
								</Link>
								<Link href={''} className="nav-links pt-10 pb-10">
									About Me
								</Link>
								<Link href={''} className="nav-links pt-10 pb-10">
									Contact Me
								</Link>
							</nav>
						</div>
					</div>

					{/* <div className="search-wrapper d-flex justify-content-space-between align-items-center pt-10 pb-10 pl-20 pr-20 border-radius-15 d-flex">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input full-width"
                />
                <LightSearchIcon />
            </div> */}
					<SearchArticle
						items={searchArticlesList}
						formatResult={formatResult}
						handleOnSelect={(item) => router.push(`article/${item.id}`)}
						handleOnSearch={handleOnSearch}
					/>
					<div className="sidenav-icon-wrapper display-none cursor-pointer">
						<LightMenuIcon />
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
		</>
	);
};

const DarkHeader = () => {
	return (
		<>
			<header className="header-container header-dark-theme-wrapper pb-20 pt-20 d-flex align-items-center justify-content-space-between">
				<div className="container d-flex justify-content-space-between align-items-center">
					<div className="logo-nav_links-wrapper d-flex align-items-center">
						<div className="logo-wrapper">
							<Link href={'/'}>
								<DarkLogo />
							</Link>
						</div>
						<div className="nav_links-wrapper">
							<nav className="navbar d-flex">
								<Link href={'/'} className="active-dark-header-nav-links nav-links pt-10 pb-10">
									Home
								</Link>
								<Link href={'/#blog'} className="nav-links pt-10 pb-10">
									Blogs
								</Link>
								<Link href={''} className="nav-links pt-10 pb-10">
									About Me
								</Link>
								<Link href={''} className="nav-links pt-10 pb-10">
									Contact Me
								</Link>
							</nav>
						</div>
					</div>

					<div className="search-wrapper d-flex justify-content-space-between align-items-center pt-10 pb-10 pl-20 pr-20 border-radius-15 d-flex">
						<input type="text" placeholder="Search" className="search-input full-width" />
						<DarkSearchIcon />
					</div>
					<div className="sidenav-icon-wrapper display-none cursor-pointer">
						<DarkMenuIcon />
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
		</>
	);
};
export { DarkHeader, LightHeader };
