import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
    return(
        <div className="error-container flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="error-code text-5xl md:text-9xl text-blue-600 font-bold mb-4">404</div>
            <div className="description text-2xl md:text-4xl text-gray-600 font-semibold mb-4">Page Not Found</div>
            <div className="back-to-home">
                <NavLink to="/" className="text-blue-600 hover:text-blue-800 text-lg font-semibold tracking-wide">Back To Home</NavLink>
            </div>
        </div>
    )
}

export default Error404;