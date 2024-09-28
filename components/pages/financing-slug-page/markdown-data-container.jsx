import MarkdownPreview from "@/components/layout/markdown-preview";

const MarkdownDataContainer = ({content, title}) => {

    if (content) return (
        <div className="flex justify-center p-8 lg:p-16 w-full border-b border-gray-200 shadow-b-sm">
            <div className="flex flex-col space-y-4 lg:space-y-8 w-full">
                <span className="text-2xl font-bold">{title}</span>
                <MarkdownPreview text={content}/>
            </div>
        </div>
    )
}

export default MarkdownDataContainer