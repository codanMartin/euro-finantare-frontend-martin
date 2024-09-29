import MarkdownExpensesContainer from "@/components/pages/financing-slug-page/markdown-expenses-container";
import MarkdownDataContainer from "@/components/pages/financing-slug-page/markdown-data-container";
import FinancingAvailability from "@/components/pages/financing-slug-page/financing-availability";
import SideDataWithSource from "@/components/pages/financing-slug-page/side-data-with-source";
import IntroSection from "@/components/pages/financing-slug-page/intro-section";
import FinancingMap from "@/components/pages/financing-slug-page/financing-map";
import BreadcrumbPageList from "@/components/layout/breadcrumb-page-list";
import { getFinancingBySlug } from "@/services/financing-service";
import { useDomainReceiver } from "@/hooks/use-domain-receiver";
import { getUnixTimestamp } from "@/utils/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params: { slug } }) {
    const desiredFinancing = await getFinancingBySlug(slug);
    const { domain, fullUrl } = useDomainReceiver();
    const { data, error } = desiredFinancing.response;

    return {
        title: `Euro Finantare - ${data["name"]}`,
        description: data["description"],
        openGraph: {
            images: [
                {
                    url: `${domain}/placeholder.jpg`,
                    secure_url: `${domain}/placeholder.jpg`,
                    alt: data["name"],
                },
            ],
            url: fullUrl,
        },
    };
}

const FinancingSlug = async ({ params: { slug } }) => {
    const desiredFinancing = await getFinancingBySlug(slug);
    const dateNowInUnix = getUnixTimestamp(new Date());
    const { data, error } = desiredFinancing.response;

    return (
        <div className="flex w-full max-w-[1750px] flex-1 justify-center">
            <div className="flex h-full w-full flex-1 flex-col items-center">
                <BreadcrumbPageList />
                <div className="flex w-full flex-1 justify-center">
                    {!error && data && (
                        <div className="flex w-full flex-col">
                            <IntroSection data={data} />
                            <div className="flex w-full flex-col-reverse xl:flex-row">
                                <div className="flex flex-col border-x border-gray-200 shadow-r-sm">
                                    <FinancingAvailability
                                        data={data}
                                        dateNowInUnix={dateNowInUnix}
                                    />
                                    <MarkdownDataContainer
                                        content={data["description"]}
                                        title="Descrierea finanțării"
                                    />
                                    <MarkdownDataContainer
                                        content={data["eligibleActivities"]}
                                        title="Activități eligibile"
                                    />
                                    <div className="flex w-full justify-center border-b border-gray-200 shadow-b-sm md:px-8 lg:px-16">
                                        <div className="flex w-full flex-col md:flex-row md:space-x-4 lg:space-x-8">
                                            <MarkdownExpensesContainer
                                                content={data["eligibleExpenses"]}
                                                title="Cheltuieli eligibile"
                                            />
                                            <MarkdownExpensesContainer
                                                content={data["eligibleMinimisExpenses"]}
                                                title="Cheltuieli eligibile (Minimis)"
                                            />
                                            <MarkdownExpensesContainer
                                                content={data["eligibleStateExpenses"]}
                                                title="Cheltuieli eligibile (Ajutor de Stat)"
                                            />
                                            <MarkdownExpensesContainer
                                                content={data["nonEligibleExpenses"]}
                                                title="Cheltuieli neeligibile"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full min-w-[350px] flex-col items-center border-b border-r border-gray-200 shadow-b-sm">
                                    <FinancingMap
                                        regions={data["supported_regions"]}
                                        title="Regiuni eligibile"
                                    />
                                    <SideDataWithSource
                                        content={data["program"]["about"]["title"]}
                                        source={data["program"]["about"]["link"]}
                                        title="Despre finanțare"
                                    />
                                    <SideDataWithSource
                                        content={data["program"]["where_to_apply"]["description"]}
                                        source={data["program"]["where_to_apply"]["link"]}
                                        title="Unde depun proiectul?"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FinancingSlug;
