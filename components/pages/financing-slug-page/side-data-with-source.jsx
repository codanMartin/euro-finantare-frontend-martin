const SideDataWithSource = ({title, content, source}) => {

    return (
        <div className="flex p-8 lg:p-16 xl:pl-8 pr-16 flex-col space-y-4 lg:space-y-8 w-full border-b shadow-b-sm border-gray-200">
            <span className="text-2xl font-bold">{title}</span>
            <div className="flex flex-col">
                {content && <span>Agentia responsabila: {content}</span>}
                {source && (
                    <div>
                        <span className="mr-2">Sursa:</span>
                        <a href={source.toString()}
                           className="hover:underline hover:text-eu-blue">
                            apasati aici
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SideDataWithSource