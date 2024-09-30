import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Montserrat } from "next/font/google";
import { cn } from "@/utils/utils";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: {
        default: "Euro Finantare",
        template: "Euro Finantare - %s",
    },
    description: "",
    twitter: {
        card: "summary_large_image",
    },
    robots: {
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
            <body className="antialiased">
                <div
                    className={cn(
                        montserrat.className,
                        "min-w-screen relative flex h-full min-h-screen w-full flex-col items-center text-[#212121]",
                    )}>
                    <Header />
                    <main className="flex h-full w-full flex-1 flex-col items-center">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
