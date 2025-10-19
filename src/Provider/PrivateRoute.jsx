import React, { use } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use (AuthContext);

    const location = useLocation();

    if(loading){
        return <Loading></Loading> ;
    }
    if(user&& user?.email){
        return children;
    }else{
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
  
 
};

export default PrivateRoute;