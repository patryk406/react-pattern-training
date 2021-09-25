import { useState, useEffect } from "react";

export function useMobile() {
    const [{ width, height }, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            if (window.innerWidth > 1024 || window.innerHeight > 1024) {
                setIsMobile(false)
            } else {
                setIsMobile(true)
            }
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setSize]);
    return { isMobile };
}