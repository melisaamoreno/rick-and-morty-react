import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({redirectPath="/"}) => {
    const user = true
    if (user){
        return <Navigate to={redirectPath} replace/>
    }
    return <Outlet/>
    
}