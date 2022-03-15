
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {

    const token = localStorage.getItem('jwt')

    if (!token) {
        return <Navigate to="/sign-in" replace />;
    }

    return props.children
}

export default ProtectedRoute 
