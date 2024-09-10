import Image from "next/image";
import placeholder from "@/public/placeholder.jpg";
import Button from "@/components/layout/button";

const Banner = () => {

    return (
        <div className="flex relative w-full h-[400px]">
            <Image src={placeholder} alt="" loading="lazy" className="w-full h-full object-left-bottom object-cover"/>
            <div className="absolute flex flex-col gap-3 sm:tracking-loose flex-1 justify-center text-xl sm:text-3xl font-bold sm:text-semibold h-full w-full bg-white/5 px-8 sm:px-16">
                    <span className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]">
                        Tu concentreza-te pe visul tau.</span>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]">
                        Noi te ajutam sa iti gasesti finantarea potrivita!</span>
                <Button action={() => false} text="Afla mai multe!"/>
            </div>
        </div>
    )
}
export default Banner