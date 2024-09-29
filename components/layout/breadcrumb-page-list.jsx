"use client";

import { FaCaretRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

const truncateLabel = (label, maxLength = 40) => {
    if (label.length <= maxLength) return label;
    return `${label.slice(0, maxLength - 3)}...`;
};

export default function BreadcrumbPageList() {
    const pathname = usePathname();

    const pathSegments = pathname.split("/").filter((segment) => segment !== "");
    const breadcrumbs = [
        { label: "Home", href: "/" },
        ...pathSegments.map((segment, index) => ({
            label: segment
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(" "),
            href: `/${pathSegments.slice(0, index + 1).join("/")}`,
        })),
    ];

    return (
        <div className="flex w-full items-center border-x border-b border-gray-200 px-8 py-4 shadow-b-sm lg:px-16">
            <nav aria-label="Breadcrumb">
                <ul role="list" className="flex flex-wrap items-center">
                    {breadcrumbs.map((item, index) => (
                        <li key={index} className="flex">
                            {index < breadcrumbs.length - 1 && (
                                <Link
                                    href={item.href}
                                    className="text-nowrap text-gray-700 transition-colors duration-200 hover:text-gray-900"
                                    title={item.label}>
                                    {truncateLabel(item.label)}
                                </Link>
                            )}
                            {!(index < breadcrumbs.length - 1) && (
                                <span className="font-bold text-gray-800" title={item.label}>
                                    {truncateLabel(item.label)}
                                </span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <div className="flex items-center justify-center px-2 text-lg text-gray-700">
                                    <FaCaretRight />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
