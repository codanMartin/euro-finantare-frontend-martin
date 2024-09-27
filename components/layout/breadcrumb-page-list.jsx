"use client"
import {usePathname} from 'next/navigation'
import Link from "next/link";
import {FaCaretRight} from "react-icons/fa6";

const truncateLabel = (label, maxLength = 35) => {
    if (label.length <= maxLength) return label;
    return `${label.slice(0, maxLength - 3)}...`;
}

export default function BreadcrumbPageList() {
    const pathname = usePathname();

    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const breadcrumbs = [
        {label: 'Home', href: '/'},
        ...pathSegments.map((segment, index) => ({
            label: segment.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '),
            href: `/${pathSegments.slice(0, index + 1).join('/')}`
        }))
    ];


    return (
        <div className="px-8 lg:px-16 py-4 flex items-center border-b border-gray-200 shadow">
            <nav aria-label="Breadcrumb">
                <ul role="list" className="flex items-center flex-wrap">
                    {breadcrumbs.map((item, index) => (
                        <li key={index} className="flex">
                            {index < breadcrumbs.length - 1 && (
                                <Link href={item.href}
                                      className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-nowrap"
                                      title={item.label}>
                                    {truncateLabel(item.label)}
                                </Link>
                            )}
                            {!(index < breadcrumbs.length - 1) && (
                                <span className="font-bold text-gray-800"
                                      title={item.label}>{truncateLabel(item.label)}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <div className="text-gray-700 text-lg px-2 flex items-center justify-center">
                                    <FaCaretRight/>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
