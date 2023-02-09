import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../assets/spotify_logo.JPG';

function LoginFormPage() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const demoUser = e => {
        setCredential('demo@demo.com');
        setPassword('demodemo');
    }

    return (
        <div className="outer">
            <div className="loginLogo">
                <img src={logo} alt='' />
            </div>
            <a href="https://www.linkedin.com/in/stiven-kang-69a9ab258/">
                <button type="linkedIn" className="linkedInButton">LINKEDIN</button>
            </a>
            <br/>
            <a href="https://github.com/stivenkang">
                <button type="github" className="githubButton">GITHUB</button>
            </a>
            <p className="logInfo">To continue, log in to Jukebox.</p>
            <br/>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li className="errorLI" key={error}><i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{error}</span></li>)}
                    </ul>
                    <label id="credName">Email address or username</label>
                    <br/>
                    <input
                        id="cred"
                        type="text"
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                        placeholder="Email address or username"
                        required
                    />
                    <br/>
                    <br/>
                    <label id="credName">Password</label>
                    <br/>
                    <input
                        id="cred"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <br/>
                    <br/>
                    {/* <div className="loginButtonDiv"> */}
                        <button type="submit" className="loginButton">LOG IN</button>
                    {/* </div> */}
                    <br/>
                    <br/>
                    <button onClick={demoUser} className="demoUserButton" type="submit">DEMO USER</button>
                </form>
            </div>
            <p className="noAccount">Don't have an account?</p>
            <br/>
            <div className="signUp">
                <Link to="/signup">SIGN UP FOR JUKEBOX</Link>
            </div>
        </div>
    )
}

export default LoginFormPage;