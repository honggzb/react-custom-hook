import { useEffect, useState } from "react";

export function useScrollPosition() {

    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            /**
             * window.innerHeight                       height of visible window 
             * document.documentElement.scrollTop       scroll distance from the top
             * document.documentElement.offsetHeight    height of whole window 
             */
            setIsBottom(
                window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight
            );
        });
    }, []);

    return { isBottom };

}