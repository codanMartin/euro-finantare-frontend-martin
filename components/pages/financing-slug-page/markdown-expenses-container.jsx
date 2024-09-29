import MarkdownPreview from "@/components/layout/markdown-preview";

const MarkdownExpensesContainer = ({ content, title }) => {
    if (content)
        return (
            <div className="flex w-full flex-1 flex-shrink border-b border-gray-200 px-8 shadow-b-sm last:shadow-none md:border-b-0 md:px-0 md:shadow-none">
                <div className="flex flex-col space-y-4 border-gray-200 py-8 md:border-r md:shadow-r-sm md:last:border-r-0 md:last:shadow-none lg:space-y-8 lg:py-16">
                    <span className="min-h-[64px] text-2xl font-semibold">{title}</span>
                    <div className={"pr-4 md:max-h-[300px] md:overflow-y-scroll lg:pr-8"}>
                        <MarkdownPreview text={content} />
                    </div>
                </div>
            </div>
        );
};

export default MarkdownExpensesContainer;
