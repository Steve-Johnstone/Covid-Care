import React from "react";
import LoginPage from '../components/volunteer-login.component';
import LoginFooter from "../components/volunteer-login-footer.component";

const VolunteersLogin = () => {
    return (
        <div >
            <div style={{maxWidth: '600px'}} className="container">
            <div className="flex">
            <h1 >Covid Care</h1>
            </div>
            <LoginPage className="flex"/> 
            </div>
            <br/>
            <LoginFooter />   
        </div>
    )
}

export default VolunteersLogin;
