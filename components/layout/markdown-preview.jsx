import { MDXRemote } from 'next-mdx-remote/rsc';
import { cn } from "@/utils/utils";
import {FaCircle} from "react-icons/fa6";

// Define a components map with Tailwind CSS classes using props
const MarkdownPreview = async ({
                                   text, className = "", H1ClassName = '', H2ClassName = '',
                                   H3ClassName = '', PClassName = '', AClassName = '',
                                   ULClassName = '', OLClassName = '', LIClassName = '',
                                   ImgClassName = '', PreClassName = '', CodeClassName = '',
                               }) => {
    const components = {
        h1: (props) => <h1 className={cn("text-wrap", H1ClassName)} {...props} />,
        h2: (props) => <h2 className={cn("text-wrap", H2ClassName)} {...props} />,
        h3: (props) => <h3 className={cn("text-wrap", H3ClassName)} {...props} />,
        p: (props) => <p className={cn("mb-2 last:mb-0 text-wrap", PClassName)} {...props} />,
        a: (props) => <a className={cn("text-wrap", AClassName)} {...props} />,
        ul: (props) => <ul className={cn("mb-6 last:mb-0 text-wrap", ULClassName)} {...props} />,
        ol: (props) => <ol className={cn("text-wrap", OLClassName)} {...props} />,
        li: (props) => (
            <div className="flex flex-shrink flex-row mb-1 last:mb-0 text-wrap">
                <FaCircle className="text-xs text-eu-blue/30 mt-[7px] mr-[6px] font-normal min-h-[10px] min-w-[8px] max-h-[10px] max-w-[8px]"/>
                <li className={cn("text-wrap", LIClassName)} {...props} />
            </div>
        ),
        img: (props) => <img className={cn("", ImgClassName)} {...props} />,
        pre: (props) => <pre className={cn("", PreClassName)} {...props} />,
        code: (props) => <code className={cn("", CodeClassName)} {...props} />,
    };

    return (
        <div className={cn("flex flex-col flex-shrink", className)}>
            <MDXRemote source={text} components={components} />
        </div>
    );
};

export default MarkdownPreview;
