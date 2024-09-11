import LogoWithTitle from "@/components/layout/logo-with-title";
import Link from "next/link";

const Header = () => {

    return (
        <header className="flex sticky top-0 z-50 bg-white w-full h-16 border-b border-gray-300 shadow">
            <div className="flex items-center h-full w-full justify-between gap-4">
                <Link href="/" className="pl-[10.5px] focus-within:outline-none">
                    <LogoWithTitle className={"flex w-full"}/>
                </Link>
                <Link href="/colectare-date" className="h-full group flex items-center bg-eu-blue text-white sm:text-nowrap sm:text-lg sm:font-bold">
                        <span
                            className="px-[21px] group-hover:underline text-center">
                            Vreau finantare!
                        </span>
                </Link>
            </div>
        </header>
    )
}
export default Header