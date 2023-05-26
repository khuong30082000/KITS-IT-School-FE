import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate();
  //   }, 2000);
  // }, [navigate]);
  // return <Navigate to="/dashboard" />;

  return <div>Page not Found</div>;
};

export default NotFoundPage;
