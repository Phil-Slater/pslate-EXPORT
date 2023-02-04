import { useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

const IsLoading = (WrappedComponent) => {
    function HOC(props) {
        const [loading, setLoading] = useState(true);

        const setLoadingState = isComponentLoading => {
            setLoading(isComponentLoading);
        };

        return (
            <>
                {loading && <LoadingAnimation />}
                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        );
    }
    return HOC;
};

export default IsLoading;
