import React from 'react';

const Login = (props) => {
    const  {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError ,setHelp} = props;
    return(
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" 
                outoffocus="true"
                required
                value={email}
                onChange={(e) => {setEmail(e.target.value); setHelp(email.replace('.', ''));}}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input 
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin} className="specialcase">Sign in</button>
                            <p>Don't have an account ? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                                </p>
                        </>
                    ):(
                        <>
                            <button onClick={handleSignup} className="specialcase">Sign up</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )

}

export default Login;