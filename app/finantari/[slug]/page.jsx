import MarkdownExpensesContainer from "@/components/pages/financing-slug-page/markdown-expenses-container";
import MarkdownDataContainer from "@/components/pages/financing-slug-page/markdown-data-container";
import FinancingAvailability from "@/components/pages/financing-slug-page/financing-availability";
import SideDataWithSource from "@/components/pages/financing-slug-page/side-data-with-source";
import IntroSection from "@/components/pages/financing-slug-page/intro-section";
import FinancingMap from "@/components/pages/financing-slug-page/financing-map";
import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import {getFinancingBySlug} from "@/services/financing-service";
import useDomainReceiver from "@/hooks/use-domain-receiver";
import {getUnixTimestamp} from "@/utils/utils";

export const dynamic = 'force-dynamic';

export async function generateMetadata({params: {slug}}) {
    const desiredFinancing = await getFinancingBySlug(slug)
    const {data, error} = desiredFinancing.response
    const {domain} = useDomainReceiver()


    return {
        title: `Euro Finantare - ${data["name"]}`,
        description: data["description"],
        openGraph: {
            images: [
                {
                    url: `${domain}/placeholder.jpg`,
                    secure_url: `${domain}/placeholder.jpg`,
                    alt: data["name"]
                }
            ],
            url: `${domain}/finantari/${slug}`,
        },
    };
}

const FinancingSlug = async ({params: {slug}}) => {
    const desiredFinancing = await getFinancingBySlug(slug)
    const dateNowInUnix = getUnixTimestamp(new Date());
    const {data, error} = desiredFinancing.response
    const {domain} = useDomainReceiver()
    const shareUrl = `${domain}/finantari/${slug}`

    return (
        <div className="flex flex-1 w-full justify-center max-w-[1750px]">
            <div className="flex flex-col w-full flex-1 items-center h-full">
                <BreadcrumbPageList/>
                <div className="flex justify-center flex-1 w-full">
                    {!error && data && (
                        <div className="flex flex-col w-full">
                            <IntroSection data={data} shareUrl={shareUrl}/>
                            <div className="flex flex-col-reverse xl:flex-row w-full">
                                <div className="flex flex-col shadow-r-sm border-x border-gray-200">
                                    <FinancingAvailability data={data} dateNowInUnix={dateNowInUnix}/>
                                    <MarkdownDataContainer content={data["description"]}
                                                           title="Descrierea finanțării"/>
                                    <MarkdownDataContainer content={data["eligibleActivities"]}
                                                           title="Activități eligibile"/>
                                    <div
                                        className="flex justify-center md:px-8 lg:px-16 w-full border-b border-gray-200 shadow-b-sm">
                                        <div className="flex flex-col md:flex-row w-full md:space-x-4 lg:space-x-8">
                                            <MarkdownExpensesContainer content={data["eligibleExpenses"]}
                                                                       title="Cheltuieli eligibile"/>
                                            <MarkdownExpensesContainer content={data["eligibleMinimisExpenses"]}
                                                                       title="Cheltuieli eligibile (Minimis)"/>
                                            <MarkdownExpensesContainer content={data["eligibleStateExpenses"]}
                                                                       title="Cheltuieli eligibile (Ajutor de Stat)"/>
                                            <MarkdownExpensesContainer content={data["nonEligibleExpenses"]}
                                                                       title="Cheltuieli neeligibile"/>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="min-w-[350px] flex-col flex items-center w-full border-b border-r border-gray-200 shadow-b-sm">
                                    <FinancingMap regions={data["supported_regions"]} title="Regiuni eligibile"/>
                                    <SideDataWithSource content={data["program"]["about"]["title"]}
                                                        source={data["program"]["about"]["link"]}
                                                        title="Despre finanțare"/>
                                    <SideDataWithSource content={data["program"]["where_to_apply"]["description"]}
                                                        source={data["program"]["where_to_apply"]["link"]}
                                                        title="Unde depun proiectul?"/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FinancingSlug