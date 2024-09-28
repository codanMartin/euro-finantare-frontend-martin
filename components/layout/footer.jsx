import Link from "next/link";
import LogoWithTitle from "@/components/layout/logo-with-title";
import {FaEnvelope, FaLocationDot, FaPhone} from "react-icons/fa6";

const Footer = () => {

    return (
        <footer
            className="flex border-t border-gray-300 justify-center w-full min-h-[400px] bg-[#212121] px-8 md:px-16 py-16 text-[#f9f9f9]">
            <div className="flex w-full max-w-screen-2xl">
            <div className="flex flex-col w-full space-y-16">
                <div
                    className="flex flex-col space-y-4 md:space-y-0 md:flex-row flex-1 w-full md:justify-between md:space-x-4">
                    <div className="flex flex-col space-y-4 max-w-md">
                        <Link href="/" className="relative flex items-center space-x-2 text-2xl text-eu-blue font-bold justify-start">
                            <LogoWithTitle inverted={true} className="flex w-[60px] h-[50px]"/>
                            <div className={"flex flex-col -space-y-2.5 pt-[11px]"}>
                                <span>EURO</span>
                                <span>FINANTARE</span>
                            </div>
                        </Link>
                        <span>Pentru mai multe informații, nu ezitați să ne contactați la numărul afișat sau pe e-mail.</span>
                    </div>
                    <div className="flex flex-col space-y-4 max-w-md text-lg">
                        <span className="font-semibold text-xl">Contact</span>
                        <div className="flex space-x-2 items-center">
                            <FaPhone className="text-3xl text-eu-blue"/>
                            <span>+40 899 923 123</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <FaEnvelope className="text-3xl text-eu-blue"/>
                            <span>contact@eurofinantare.ro</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <FaLocationDot className="text-3xl text-eu-blue"/>
                            <span>Bucuresti, Sector 6, Strada Crangasi 89</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 flex-1 w-full">
                    <span>Copyright © 2024 EURO FONDURI SRL. Toate drepturile sunt rezervate.</span>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 sm:divide-x sm:h-min">
                        <Link href={"#"} className="text-nowrap hover:underline">
                            <span>Politică de Confidențialitate</span>
                        </Link>
                        <Link href={"#"} className="sm:pl-2 text-nowrap hover:underline">
                            <span className="self-center">Termeni și Condiții</span>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}
export default Footer