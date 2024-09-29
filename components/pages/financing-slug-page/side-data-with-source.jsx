const SideDataWithSource = ({ title, content, source }) => {
    return (
        <div className="flex w-full flex-col space-y-4 border-b border-gray-200 p-8 shadow-b-sm lg:space-y-8 xl:px-16">
            <span className="text-2xl font-bold">{title}</span>
            <div className="flex flex-col">
                {content && <span>Agentia responsabila: {content}</span>}
                {source && (
                    <div>
                        <span className="mr-2">Sursa:</span>
                        <a href={source.toString()} className="text-eu-blue underline">
                            apasa aici
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideDataWithSource;
