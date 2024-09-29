import { MDXRemote } from "next-mdx-remote/rsc";
import { cn } from "@/utils/utils";

// Define a components map with Tailwind CSS classes using props
const MarkdownPreview = async ({
    text,
    className = "",
    H1ClassName = "",
    H2ClassName = "",
    H3ClassName = "",
    PClassName = "",
    AClassName = "",
    ULClassName = "",
    OLClassName = "",
    LIClassName = "",
    ImgClassName = "",
    PreClassName = "",
    CodeClassName = "",
}) => {
    const components = {
        h1: (props) => <h1 className={cn("text-wrap", H1ClassName)} {...props} />,
        h2: (props) => <h2 className={cn("text-wrap", H2ClassName)} {...props} />,
        h3: (props) => <h3 className={cn("text-wrap", H3ClassName)} {...props} />,
        p: (props) => <p className={cn("mb-2 text-wrap last:mb-0", PClassName)} {...props} />,
        a: (props) => <a className={cn("text-wrap", AClassName)} {...props} />,
        ul: (props) => <ul className={cn("mb-6 text-wrap last:mb-0", ULClassName)} {...props} />,
        ol: (props) => <ol className={cn("text-wrap", OLClassName)} {...props} />,
        li: (props) => (
            <div className="mb-1 flex flex-shrink flex-row text-wrap last:mb-0">
                <span className="mr-[6px] text-eu-blue/30">&#9679;</span>
                <li className={cn("text-wrap", LIClassName)} {...props} />
            </div>
        ),
        img: (props) => <img className={cn("", ImgClassName)} {...props} />,
        pre: (props) => <pre className={cn("", PreClassName)} {...props} />,
        code: (props) => <code className={cn("", CodeClassName)} {...props} />,
    };

    return (
        <div className={cn("flex flex-shrink flex-col", className)}>
            <MDXRemote source={text} components={components} />
        </div>
    );
};

export default MarkdownPreview;
