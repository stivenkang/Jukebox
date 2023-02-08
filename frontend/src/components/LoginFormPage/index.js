import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../assets/spotify_logo.jpeg';

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
        setCredential('danlee');
        setPassword('danlee');
    }

    return (
        <div className="outer">
            <div id="logo">
                <img src={logo} alt='' />
                <p id="project_name">Jukebox</p>
            </div>
            <br/>
            <p id="info">Log in to Jukebox to continue.</p>
            <br/>
            <div className="login">
                <form onSubmit={handleSubmit}>
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <label id="credentialName">Email address or username</label>
                    <br/>
                    <input
                        id="credential"
                        type="text"
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                        placeholder="Email address or username"
                        required
                    />
                    <br/>
                    <br/>
                    <label id="passwordName">Password</label>
                    <br/>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <br/>
                    <br/>
                    <button type="submit" id="loginButton">LOG IN</button>
                    <br/>
                    <br/>
                    <button onClick={demoUser} id="demoUserButton" type="submit">DEMO USER</button>
                </form>
            </div>
            <p id="noAccount">Don't have an account?</p>
            <br/>
            <div id="signUp">
                <Link to="/signup">SIGN UP FOR JUKEBOX</Link>
            </div>
        </div>
    )
}

export default LoginFormPage;