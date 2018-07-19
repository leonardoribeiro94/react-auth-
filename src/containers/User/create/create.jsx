import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { create } from "../redux/user-action";

class Create extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }
  render() {
    const { create } = this.props;
    const { name, email, password } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        <input
          type="email"
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
          value="Register"
          onClick={() => create(name, email, password)}
        />
        <br />
        <br />
        <Link to="/">
          <input type="button" value="Login now!" />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      create
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Create);
