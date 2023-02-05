import Loader from "react-spinners/ClipLoader";
import './Loading.css';

const LoadingAnimation = () => {
    return (
        <div className="loading-bg">
            <Loader
                color={"white"}
                loading={true}
                size={80}
                speedMultiplier={0.8}
            />
        </div>
    )
};

export default LoadingAnimation;
