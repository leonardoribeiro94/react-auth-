import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { authenticate } from "../redux/user-action";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { authenticate } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login!</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={event => this.setState({ email: event.target.value })}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onChange={event => this.setState({ password: event.target.value })}
        />

        <br />
        <br />
        <input
          type="button"
          value="Login"
          onClick={() => authenticate(email, password)}
        />

        <br />
        <br />
        <Link to="/create">
          <input type="button" value="register now!" />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticate
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Login);
