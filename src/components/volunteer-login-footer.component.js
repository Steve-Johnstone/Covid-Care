

function LoginFooter() {

    const footerTextStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        paddingTop: '20px', 
        color: 'white'
      }

    return (
        <div style={{backgroundColor: "#A78080", height: '100vh',
        minHeight: '100vh'}}>
            <div>
                <h4 style={footerTextStyle}>Register</h4>
                <h5 style={footerTextStyle}>Don't have an account?</h5>
                <div className="flex">
                <button
                id="primaryButton" 
                className="btn">
                Request help
                </button>
                </div>
                <div 
                className="flex">
                <button
                id="primaryButton" 
                className="btn">
                Register as a volunteer
                </button>
                </div>
            </div>
        </div>
    )
}

export default LoginFooter
