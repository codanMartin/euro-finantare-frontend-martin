import ProMessage from "@/components/pages/home-page/pro-cons/pro-message";
import ConMessage from "@/components/pages/home-page/pro-cons/con-message";
import notUsingEurofinantare from "@/public/not-using-eurofinantare.jpg";
import usingEurofinantare from "@/public/using-eurofinantare.jpg";
import Image from "next/image";

const ProCons = () => {

    return (
        <div className="flex flex-col flex-1 items-center w-full  py-16">
            <div className="flex text-center text-2xl font-bold pb-16">
                Lorem ipsum dolor sit amet?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-lg gap-8 md:gap-16">
                <div
                    className="col-span-1 h-min bg-gray-50 border border-gray-300 rounded-2xl p-4 shadow-3xl scale-105 translate-z-10">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-center">
                            <div className="relative flex justify-center">
                                <Image src={usingEurofinantare} alt=""
                                       className="aspect-square rounded-full border-2 border-eu-blue shadow w-full max-w-[120px]"/>
                            </div>
                            <div className="flex flex-col justify-center pl-2">
                                <span className="text-xl font-semibold">Andrei</span>
                            </div>
                            <div className="flex flex-col pt-8 space-y-4 w-full justify-start">
                                <ProMessage message={"Lorem ipsum dolor sit amet."}/>
                                <ProMessage message={"Nunc pretium, velit sed aliquet euismod, metus erat, eu tempus tellus est vitae odio."}/>
                                <ProMessage message={"Duis ac nibh mattis lorem eu sit amet tortor."}/>
                                <ProMessage message={"Quisque metus leo, venenatis turpis."}/>
                                <ProMessage message={"Nunc pretium eu tempus tellus est vitae odio."}/>
                                <ProMessage message={"Nunc  est vitae odio."}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 h-min bg-gray-300 border border-gray-300 rounded-2xl shadow-sm p-4 -translate-z-10">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col items-center">
                            <div className="relative flex justify-center">
                                <Image src={notUsingEurofinantare} alt=""
                                       className="aspect-square rounded-full border-2 border-gray-500 shadow w-full max-w-[120px]"/>
                            </div>
                            <div className="flex flex-col justify-center pl-2">
                                <span className="text-xl font-semibold">George</span>
                            </div>
                            <div className="flex flex-col pt-8 space-y-4 w-full justify-start">
                                <ConMessage message={"Lorem ipsum dolor sit amet."}/>
                                <ConMessage message={"Duis ac nibh mattis lorem eu sit amet tortor."}/>
                                <ConMessage message={"Quisque metus leo, venenatis turpis."}/>
                                <ConMessage message={"Nunc  est vitae odio."}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProCons