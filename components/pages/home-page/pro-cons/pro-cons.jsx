import ProMessage from "@/components/pages/home-page/pro-cons/pro-message";
import ConMessage from "@/components/pages/home-page/pro-cons/con-message";
import notUsingEurofinantare from "@/public/not-using-eurofinantare.jpg";
import usingEurofinantare from "@/public/using-eurofinantare.jpg";
import Image from "next/image";

const ProCons = () => {
    return (
        <div className="flex w-full flex-1 flex-col items-center px-8 py-16 lg:px-16">
            <div className="flex pb-16 text-center text-2xl font-bold">
                Lorem ipsum dolor sit amet?
            </div>
            <div className="grid w-full max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16">
                <div className="shadow-3xl col-span-1 h-min rounded-2xl border border-gray-300 bg-gray-50 p-4">
                    <div className="flex w-full flex-col">
                        <div className="flex flex-col items-center">
                            <div className="relative flex justify-center">
                                <Image
                                    src={usingEurofinantare}
                                    alt=""
                                    className="aspect-square w-full max-w-[120px] rounded-full border-2 border-eu-blue shadow"
                                />
                            </div>
                            <div className="flex flex-col justify-center pl-2">
                                <span className="text-xl font-semibold">Andrei</span>
                            </div>
                            <div className="flex w-full flex-col justify-start space-y-4 pt-8">
                                <ProMessage message={"Lorem ipsum dolor sit amet."} />
                                <ProMessage
                                    message={
                                        "Nunc pretium, velit sed aliquet euismod, metus erat, eu tempus tellus est vitae odio."
                                    }
                                />
                                <ProMessage
                                    message={"Duis ac nibh mattis lorem eu sit amet tortor."}
                                />
                                <ProMessage message={"Quisque metus leo, venenatis turpis."} />
                                <ProMessage
                                    message={"Nunc pretium eu tempus tellus est vitae odio."}
                                />
                                <ProMessage message={"Nunc  est vitae odio."} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-translate-z-10 col-span-1 h-min rounded-2xl border border-gray-300 bg-gray-300 p-4 shadow-sm">
                    <div className="flex w-full flex-col">
                        <div className="flex flex-col items-center">
                            <div className="relative flex justify-center">
                                <Image
                                    src={notUsingEurofinantare}
                                    alt=""
                                    className="aspect-square w-full max-w-[120px] rounded-full border-2 border-gray-500 shadow"
                                />
                            </div>
                            <div className="flex flex-col justify-center pl-2">
                                <span className="text-xl font-semibold">George</span>
                            </div>
                            <div className="flex w-full flex-col justify-start space-y-4 pt-8">
                                <ConMessage message={"Lorem ipsum dolor sit amet."} />
                                <ConMessage
                                    message={"Duis ac nibh mattis lorem eu sit amet tortor."}
                                />
                                <ConMessage message={"Quisque metus leo, venenatis turpis."} />
                                <ConMessage message={"Nunc  est vitae odio."} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProCons;
