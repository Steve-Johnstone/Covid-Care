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
            <h1 id="main-header">CovidCare</h1>
        </div>
        <div 
        id="main-box"
        className='container'>
            <p>Despite the success of the vaccination programme in the UK, Covid is still a major issue which is affecting many people every week, 
            who are forced to self-isolate, either due to a positive test or because they have potentially been in contact with the virus. CovidCare 
            is a social enterprise, designed to connect those who need help, with volunteers in their local area, who are willing to assist them.</p>

            <h3 id="small-header">Need Help?</h3>
            <p>If you are self-isolating and need help with day-to-day chores, our volunteers can offer services such as:</p>
                <ul> 
                    <li>Shopping</li>
                    <li>Walking dogs</li>
                    <li>Picking up pescriptions</li>
                </ul>
             
            <p>If you require assistance, please register for help by clicking on the button below and filling out a simple registration form.</p>

            <h3 id="small-header">Volunteers</h3>
            <p> Volunteering to help those in need is an extremely rewarding way to give back to your community.  We always need more volunteers, so 
                if you are willing to help, please register below.</p>
        </div>
            <div 
        className='footer'>
            <Link style={{backgroundColor: '#2734AD', marginRight: '20px'}} id="primaryButton" className="btn" to="/volunteers/login">Login</Link>
            <Link style={{marginRight: '20px'}} id="primaryButton" className="btn">Request help</Link>
            <Link id="primaryButton" className="btn"  to="/volunteers/register">Register as volunteer</Link>
            </div>
            </div>
    )
}

export default MainPage;
