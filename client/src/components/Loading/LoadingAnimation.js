import ClipLoader from "react-spinners/ClipLoader";
import './Loading.css'

const LoadingAnimation = () => {
    return (
        <div className="loading-bg">
            <ClipLoader
                color={"white"}
                loading={true}
                size={150}
            />
        </div>
    )
}

export default LoadingAnimation
