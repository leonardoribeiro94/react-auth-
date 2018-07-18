import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
                <p>
                    <label htmlFor="email">E-mail</label>
                </p>
                <input type="text" name="email" id="email" />
                <p>
                    <label htmlFor="password">Password</label>
                </p>
                <input type="text" name="password" id="password" />
                <p>
                    <input type="button" value="Login" />
                </p>

            </div>
        );
    }
}


export default Login;