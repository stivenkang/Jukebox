import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'
import logo from '../../assets/spotify_logo.JPG';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === confirmEmail) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['The email addresses don\'t match']);
  };

  return (
    <div>
        <div className="signinLogo">
            <img src={logo} alt='' />
        </div>
        <p className="signInfo">Sign up for free to start listening.</p>
        <p className="title">Sign up with your email address</p>
        <div className="signup">
          <form onSubmit={handleSubmit}>
              <ul>
                  {errors.map(error => <li className="errorSU" key={error}><i class="fa-solid fa-circle-exclamation"></i><span style={{marginLeft: '10px'}}>{error}</span></li>)}
              </ul>
              <label id="credName">What's your email?</label>
              <br/>
                <input
                id="cred"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email."
                required
                />
              <br/>
              <br/>
              <label id="credName" >Confirm your email</label>
              <br/>
                  <input
                  id="cred"
                  type="text"
                  value={confirmEmail}
                  onChange={(e) => setConfirmEmail(e.target.value)}
                  placeholder="Enter your email again."
                  required
                  />
              <br/>
              <br/>
              <label id="credName">Create a password</label>
                <input
                id="cred"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password."
                required
                />
              <br/>
              <br/>
              <label id="credName">What should we call you?</label>
              <br/>
                <input
                id="cred"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter a profile name."
                required
                />
                <br/>
                <p id="subInfo">This appears on your profile.</p>
              <br/>
              <p className="term1">By clicking on sign-up, you agree to Jukebox's <a className="terms" href="https://www.spotify.com/us/legal/end-user-agreement/">Terms and Conditions of Use.</a></p>
              <p className="term2">To learn more about how Jukebox collects, uses, shares and protects your personal data,<br/> please see <a className="policy" href="https://www.spotify.com/us/legal/privacy-policy/">Jukebox's Privacy Policy.</a></p>
              <button type="submit" className="signupButton">Sign up</button>
          </form>
        </div>
        <div className="loginButtonSU">
          <p id="buttonInfo">Have an account? <Link to="/login">Log in.</Link></p>
        </div>
    </div>
  );
}

export default SignupFormPage;