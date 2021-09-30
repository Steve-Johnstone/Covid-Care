import React from "react";
import RegistrationPage from '../components/volunteer-register.component';

const VolunteersLogin = () => {
    return (
        <div style={{backgroundImage: "url(/backgroundImage.png)",
        backgroundSize: "cover",
        height: "100vh",
    }}>
        <h1 className="flex">Covid Care</h1>
        <div className='flex'>
            <RegistrationPage />
            </div>
        </div>
    )
}

export default VolunteersLogin;
