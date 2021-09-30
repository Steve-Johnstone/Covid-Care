import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div style={{backgroundImage: "url(/backgroundImage.png)",
        backgroundSize: "cover",
        height: "100vh",
    }}
        >
        <div 
        className='flex'>
            <h1>CovidCare</h1>
        </div>
        <div 
        className='container'>
            <p>Despite the success of the vaccination programme in the UK, Covid is still a major issue which is affecting many people every week, who are forced to self-isolate, either due to a positive test or because they have potentially been in contact with the virus.</p>
            <p>CovidCare is a social enterprise, designed to connect those who need help, with volunteers in their local area, who are willing to assist them.</p>
            <p>If you are self-isolating and need help with day-to-day chores, such as grocery shopping, picking up prescriptions or walking your dog, please register for help below.</p>
            <p>If you are willing to offer your services to help people in your local area, please register as a volunteer below.</p>
        </div>
            <div 
        className='footer'>
            <Link style={{backgroundColor: '#2734AD'}} id="primaryButton" className="btn" to="/volunteers/login">Login</Link>
            <br/>
            <Link id="primaryButton" className="btn"  to="/volunteers/register">Register</Link>
            </div>
            </div>
    )
}

export default MainPage;
