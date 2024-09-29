import placeholder from "@/public/placeholder.jpg";
import Button from "@/components/layout/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Banner = () => {
    const router = useRouter();

    return (
        <div className="relative flex h-[400px] w-full">
            <Image
                src={placeholder}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-left-bottom"
            />
            <div className="sm:tracking-loose sm:text-semibold absolute flex h-full w-full flex-1 flex-col justify-center gap-3 bg-white/5 px-8 text-xl font-bold sm:px-16 sm:text-3xl">
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]">
                    Tu concentreza-te pe visul tau.
                </span>
                <span className="drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.9)]">
                    Noi te ajutam sa iti gasesti finantarea potrivita!
                </span>
                <Button action={() => router.push("/finantari")} text="Finantari Disponibile" />
            </div>
        </div>
    );
};
export default Banner;
