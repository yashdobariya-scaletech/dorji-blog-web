import { Logo } from "@/assets/icons/icon";
import Image from "next/image";

export default function Home() {
    return (
        <header className="header">
            <div className="logo&nav_links-wrapper d-flex">
                <div className="logo-wrapper">
                    <Logo />
                </div>
            </div>
        </header>
    );
}
