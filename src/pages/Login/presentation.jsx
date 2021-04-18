import React from 'react';
import { Wrapper } from './presentation.styled'
import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../../images/login-img.svg';

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="logo"/>
        <h1>Github User</h1>
        <p>Credentials</p>
        <div>
          email: user@mail.com<br/>
          password: 1Qwerty!
        </div>
        <br />
        <button className="btn" onClick={loginWithRedirect}>Log In</button>
      </div>
    </Wrapper>
  )
};

export default Login;
