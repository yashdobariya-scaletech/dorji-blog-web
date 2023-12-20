"use client";
import { API_CONFIG, HttpService } from "@/services/http.service";
import { CloseIcon, DarkMenuIcon, LightLogo, LightMenuIcon } from "@/assets/icons/icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchArticle from "./searchArticle";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
	const [searchArticlesList, setSearchArticlesList] = useState<ArticleInfo[]>([]);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [sideNav, setSideNav] = useState<boolean>(false)
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
								img: `${process.env.NEXT_PUBLIC_API_KEY}${url}`
							})
						);
					setSearchArticlesList(articlesList);
				})
				.catch((e) => {
					console.log(e);
				});
		}
	};
	const pathname = usePathname();
	const router = useRouter();

	const headerStyles = {
		default: {
			header: {
				backgroundColor: "transparent",
				transition: ".2s ease-in-out"
			},
			color: "#fff",
			searchbox: {
				transition: ".2s ease-in-out",
				backgroundColor: "rgba(255, 255, 255, 0.1)",
			},
			sideNavMenu: {
				backgroundColor: "rgba(255, 255, 255, 0.10)"
			}
		},
		scrolled: {
			header: {
				backgroundColor: "#fff",
				transition: ".2s ease-in-out"
			},
			color: "#0F1A2E",
			searchbox: {
				transition: ".2s ease-in-out",
				backgroundColor: "rgba(15, 26, 46, 0.1)",
			}
			,
			sideNavMenu: {
				backgroundColor: "rgba(15, 26, 46, 0.1)"
			}
		}
	};

	// Scroll Detection and State Update
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.pageYOffset > window.innerHeight - 50);
		};
		window.addEventListener("scroll", handleScroll);
		return;
	}, []);

	return (
		<>
			<header
				className="header-container pb-20 pt-20 d-flex align-items-center justify-content-space-between"
				style={
					pathname === "/" || pathname.startsWith(`/article/${Number}`)
						? isScrolled
							? headerStyles.scrolled.header
							: headerStyles.default.header
						: headerStyles.scrolled.header
				}
			>
				<div className="container d-flex justify-content-space-between align-items-center">
					<div className="logo-nav_links-wrapper d-flex align-items-center">
						<Link href="/" >
							<div className="logo-wrapper">
								{pathname === "/" || pathname.startsWith(`/article/${Number}`) ? (
									isScrolled ? (
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
											<path
												d="M4.00002 8V2H18.6667C24.5556 2 36.3333 5.46667 36.3333 19.3333C36.3333 33.2 26.3333 37.1111 21.3333 37.3333H4V21.3333C4 16.5333 4.66667 16 6.66667 16H14V28H18.6667C20 28 26.6667 27.3333 26.3333 19.3333C26.0667 12.9333 21.1111 11.5556 18.6667 11.6667H10C4.40002 11.9333 4.00002 10 4.00002 8Z"
												fill="#0F1A2E"
											/>
											<path
												d="M36.3333 19.3333C36.3333 5.46667 24.5556 2 18.6667 2C23.1111 3.55556 32 9.2 32 19.3333C32 29.4667 23.3888 35.8856 14 35.3333C9.80118 35.0863 4 31.3333 4 31.3333V37.3333H21.3333C26.3333 37.1111 36.3333 33.2 36.3333 19.3333Z"
												fill="#C93E29"
											/>
										</svg>
									) : (
										<LightLogo />
									)
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
										<path
											d="M4.00002 8V2H18.6667C24.5556 2 36.3333 5.46667 36.3333 19.3333C36.3333 33.2 26.3333 37.1111 21.3333 37.3333H4V21.3333C4 16.5333 4.66667 16 6.66667 16H14V28H18.6667C20 28 26.6667 27.3333 26.3333 19.3333C26.0667 12.9333 21.1111 11.5556 18.6667 11.6667H10C4.40002 11.9333 4.00002 10 4.00002 8Z"
											fill="#0F1A2E"
										/>
										<path
											d="M36.3333 19.3333C36.3333 5.46667 24.5556 2 18.6667 2C23.1111 3.55556 32 9.2 32 19.3333C32 29.4667 23.3888 35.8856 14 35.3333C9.80118 35.0863 4 31.3333 4 31.3333V37.3333H21.3333C26.3333 37.1111 36.3333 33.2 36.3333 19.3333Z"
											fill="#C93E29"
										/>
									</svg>
								)}
							</div>
						</Link>
						<div className="nav_links-wrapper">
							<nav className="navbar d-flex">
								<Link
									href="/"
									style={
										pathname === "/" || pathname.startsWith(`/article/${Number}`)
											? isScrolled
												? headerStyles.scrolled
												: headerStyles.default
											: headerStyles.scrolled
									}
									className={`nav-links cursor-pointer pt-10 pb-10 ${pathname === '/' ? 'active-light-header-nav-links' : ""}`}
								>
									Home
								</Link>
								<Link
									href="/about-me"
									style={
										pathname === "/" || pathname.startsWith(`/article/${Number}`)
											? isScrolled
												? headerStyles.scrolled
												: headerStyles.default
											: headerStyles.scrolled
									}
									className={`nav-links pt-10 pb-10 cursor-pointer ${pathname === '/about-me' ? 'active-light-header-nav-links' : ""}`}
								>
									About Me
								</Link>
								<Link
									href=""
									style={
										pathname === "/" || pathname.startsWith(`/article/${Number}`)
											? isScrolled
												? headerStyles.scrolled
												: headerStyles.default
											: headerStyles.scrolled
									}
									className={`nav-links pt-10 pb-10`}
								>
									Contact Me
								</Link>
							</nav>
						</div>
					</div>

					<div
						className="search-wrapper d-flex justify-content-space-between align-items-center  border-radius-15 d-flex"
						style={
							pathname === "/" || pathname.startsWith(`/article/${Number}`)
								? isScrolled
									? headerStyles.scrolled.searchbox
									: headerStyles.default.searchbox
								: headerStyles.scrolled.searchbox
						}
					>
						<SearchArticle
							isScrolled={isScrolled}
							items={searchArticlesList}
							handleOnSelect={(item) => router.push(`/article/${item.id}`)}
							handleOnSearch={handleOnSearch}
						/>
					</div>
					<div
						onClick={() => setSideNav(true)}
						className="sidenav-icon-wrapper display-none cursor-pointer"
						style={pathname === "/" || pathname.startsWith(`/article/${Number}`) ? isScrolled ? headerStyles.scrolled.sideNavMenu : headerStyles.default.sideNavMenu : headerStyles.scrolled.sideNavMenu}>
						{
							pathname === "/" || pathname.startsWith(`/article/${Number}`) ? isScrolled ? <DarkMenuIcon /> : <LightMenuIcon /> : <DarkMenuIcon />
						}
					</div>
				</div>
			</header>
			{sideNav && (<div className=" sidenav-mobile-wrapper animate-opacity d-flex justify-content-end position--fixed top--0 right--0">
				<div className="sidenav animate-sidenav" >
					<div className="close-icon-wrapper position--absolute top--20 right--20"
						onClick={() => setSideNav(false)}>
						<CloseIcon />
					</div>
					<ul className="mt-50">
						<li className="sidenav-links">
							<Link className={`cursor-pointer ${pathname === "/" ? "active-side-header-nav-links" : ""}
							}`} href={"/"} onClick={() => setSideNav(false)}>Home</Link>
						</li>
						<li className="sidenav-links"><Link href={`/about-me`} className={`cursor-pointer ${pathname === "/about-me" ? "active-side-header-nav-links" : ""}
							}`} onClick={() => setSideNav(false)}>About Me</Link></li>
						<li className="sidenav-links"><Link href={""} onClick={() => setSideNav(false)}>Contact Me</Link></li>
					</ul>
				</div>
			</div>)}
		</>
	);
};

export default Header;
