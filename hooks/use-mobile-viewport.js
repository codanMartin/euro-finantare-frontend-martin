"use client";

import { useState, useEffect } from "react";

export default function useMobileViewPort() {
    const [isMobileViewPort, setIsMobileViewPort] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobileViewPort(window.innerWidth < 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobileViewPort };
}
