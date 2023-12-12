import {
    CloseIcon,
    DarkLogo,
    LightLogo,
    LightMenuIcon,
    LightSearchIcon,
    DarkSearchIcon,
    DarkMenuIcon,
} from "@/assets/icons/icon";

const LightHeader = () => {
    return (
        <>
            <header className="header-container pb-20 pt-20 d-flex align-items-center justify-content-space-between">
                <div className="container d-flex justify-content-space-between align-items-center">
                    <div className="logo-nav_links-wrapper d-flex align-items-center">
                        <div className="logo-wrapper">
                            <LightLogo />
                        </div>
                        <div className="nav_links-wrapper">
                            <nav className="navbar d-flex">
                                <a
                                    href="#"
                                    className="nav-links active-light-header-nav-links pt-10 pb-10"
                                >
                                    Home
                                </a>
                                <a
                                    href="#blog"
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
                        <LightSearchIcon />
                    </div>
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
                            <DarkLogo />
                        </div>
                        <div className="nav_links-wrapper">
                            <nav className="navbar d-flex">
                                <a
                                    href="#"
                                    className="active-dark-header-nav-links nav-links pt-10 pb-10"
                                >
                                    Home
                                </a>
                                <a
                                    href="#blog"
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
// export default LightHeader;
