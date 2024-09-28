import LogoWithTitle from "@/components/layout/logo-with-title";
import Link from "next/link";

const Header = () => {

    return (
        <header className="flex sticky top-0 z-50 bg-white w-full min-h-16  border-b border-gray-200 shadow-b-sm">
            <div className="flex flex-1 items-center w-full justify-between gap-4">
                <Link href="/"
                      className="pl-[10.5px] flex items-center space-x-2 text-xl text-eu-blue font-bold focus-within:outline-none">
                    <LogoWithTitle className={"flex w-[50px]"}/>
                    <div className={"flex flex-col -space-y-2.5 pt-[8px]"}>
                        <span>EURO</span>
                        <span>FINANTARE</span>
                    </div>
                </Link>
                <Link href="/colectare-date"
                      className="h-full group flex items-center bg-eu-blue text-white sm:text-nowrap sm:text-lg sm:font-bold">
                        <span
                            className="px-[10px] sm:px-[20px] group-hover:underline text-center">
                            Vreau finantare!
                        </span>
                </Link>
            </div>
        </header>
    )
}
export default Header