import MarkdownPreview from "@/components/layout/markdown-preview";

const MarkdownDataContainer = ({ content, title }) => {
    if (content)
        return (
            <div className="flex w-full justify-center border-b border-gray-200 p-8 shadow-b-sm lg:p-16">
                <div className="flex w-full flex-col space-y-4 lg:space-y-8">
                    <span className="text-2xl font-bold">{title}</span>
                    <MarkdownPreview text={content} />
                </div>
            </div>
        );
};

export default MarkdownDataContainer;
