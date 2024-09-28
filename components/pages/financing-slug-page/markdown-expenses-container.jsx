import MarkdownPreview from "@/components/layout/markdown-preview";

const   MarkdownExpensesContainer = ({content, title}) => {

    if (content) return (
        <div className="flex flex-1 flex-shrink w-full px-8 md:px-0 border-b md:border-b-0 border-gray-200 shadow-b-sm last:shadow-none md:shadow-none">
            <div className="py-8 lg:py-16 flex flex-col space-y-4 lg:space-y-8 border-gray-200 md:border-r md:shadow-r-sm md:last:shadow-none md:last:border-r-0">
                <span className="text-2xl font-semibold min-h-[64px]">{title}</span>
                <div className={"md:max-h-[300px] pr-4 lg:pr-8 md:overflow-y-scroll"}>
                    <MarkdownPreview text={content}/>
                </div>
            </div>
        </div>
    )
}

export default MarkdownExpensesContainer