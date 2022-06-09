import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


export const RequireAuth = ({ children }) => {

    const authState = useSelector((state) => state.auth);
    const { encodedToken } = authState;
    const location = useLocation();

    return encodedToken ? children : <Navigate to={'/'} state={{ from: location.from }} replace />
}