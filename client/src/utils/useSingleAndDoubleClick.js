import { useEffect, useState } from 'react'


export default function useSingleAndDoubleClick(actionSingleClick, actionDoubleClick, delay = 250) {
    const [click, setClick] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            // single click
            if (click === 1) actionSingleClick();
            setClick(0);
        }, delay);

        // the duration between this click and the previous one
        // is less than the value of delay = double-click
        if (click === 2) actionDoubleClick();

        return () => clearTimeout(timer);

    }, [click]);

    return () => setClick(prev => prev + 1);
}
