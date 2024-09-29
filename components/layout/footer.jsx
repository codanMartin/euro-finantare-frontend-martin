import Link from "next/link";
import LogoWithTitle from "@/components/layout/logo-with-title";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="flex min-h-[400px] w-full justify-center border-t border-gray-300 bg-[#212121] px-8 py-16 text-[#f9f9f9] md:px-16">
            <div className="flex w-full max-w-screen-2xl">
                <div className="flex w-full flex-col space-y-16">
                    <div className="flex w-full flex-1 flex-col space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
                        <div className="flex max-w-md flex-col space-y-4">
                            <Link
                                href="/"
                                className="relative flex items-center justify-start space-x-2 text-2xl font-bold text-eu-blue">
                                <LogoWithTitle inverted={true} className="flex h-[50px] w-[60px]" />
                                <div className={"flex flex-col -space-y-2.5 pt-[11px]"}>
                                    <span>EURO</span>
                                    <span>FINANTARE</span>
                                </div>
                            </Link>
                            <span>
                                Pentru mai multe informații, nu ezitați să ne contactați la numărul
                                afișat sau pe e-mail.
                            </span>
                        </div>
                        <div className="flex max-w-md flex-col space-y-4 text-lg">
                            <span className="text-xl font-semibold">Contact</span>
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-3xl text-eu-blue" />
                                <span>+40 899 923 123</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope className="text-3xl text-eu-blue" />
                                <span>contact@eurofinantare.ro</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaLocationDot className="text-3xl text-eu-blue" />
                                <span>Bucuresti, Sector 6, Strada Crangasi 89</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-1 flex-col space-y-4">
                        <span>
                            Copyright © 2024 EURO FONDURI SRL. Toate drepturile sunt rezervate.
                        </span>
                        <div className="flex flex-col space-y-2 sm:h-min sm:flex-row sm:space-x-2 sm:space-y-0 sm:divide-x">
                            <Link href={"#"} className="text-nowrap hover:underline">
                                <span>Politică de Confidențialitate</span>
                            </Link>
                            <Link href={"#"} className="text-nowrap hover:underline sm:pl-2">
                                <span className="self-center">Termeni și Condiții</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
