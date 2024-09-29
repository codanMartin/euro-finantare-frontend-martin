import LogoWithTitle from "@/components/layout/logo-with-title";
import Link from "next/link";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex min-h-16 w-full border-b border-gray-200 bg-white shadow-b-sm">
            <div className="flex w-full flex-1 items-center justify-between gap-4">
                <Link
                    href="/"
                    className="flex items-center space-x-2 pl-[10.5px] text-xl font-bold text-eu-blue focus-within:outline-none">
                    <LogoWithTitle className={"flex w-[50px]"} />
                    <div className={"flex flex-col -space-y-2.5 pt-[8px]"}>
                        <span>EURO</span>
                        <span>FINANTARE</span>
                    </div>
                </Link>
                <Link
                    href="/colectare-date"
                    className="group flex h-full items-center bg-eu-blue text-white sm:text-nowrap sm:text-lg sm:font-bold">
                    <span className="px-[10px] text-center group-hover:underline sm:px-[20px]">
                        Vreau finantare!
                    </span>
                </Link>
            </div>
        </header>
    );
};
export default Header;
