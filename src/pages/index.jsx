import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div className="container">
            <h1>Covid Care</h1>
            <h3>Main Page</h3>
            <Link className="btn btn-primary mb-2" to="/volunteers/login">Login</Link>
            <br/>
            <Link className="btn btn-primary" to="/volunteers/register">Register</Link>
        </div>
    )
}

export default MainPage;
