import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate,  useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (user) {
        return children
    }
    const location = useLocation()
    
    if (loading) {
        return (
            <div>
                <span className="loading loading-spinner loading-xs"></span>
                <span className="loading loading-spinner loading-sm"></span>
                <span className="loading loading-spinner loading-md"></span>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    return <Navigate state={location.pathname}  to={'/login'}></Navigate>


};

export default PrivateRouter;