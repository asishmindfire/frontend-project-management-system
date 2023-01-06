import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import service from "../Api";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: "",
      },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      login: { ...this.state.login, [e.target.name]: e.target.value },
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    service
      .userLogin(this.state.login)
      .then((res) => {
        // console.log(res.data);
        if (res.data.status === 1) {
          localStorage.setItem("usertoken", res.data.data);
          localStorage.setItem("userrole", res.data.role);
          this.props.history.push("/dashboard");
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from login api ->`, err);
        return alert(err.response.data.message);
      });
  }

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img
                    src={require("../../assets/images/logo.svg")}
                    alt="logo"
                  />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="email"
                      placeholder="Username or Email"
                      size="lg"
                      className="h-auto"
                      name="email"
                      value={this.state.login.email}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      size="lg"
                      className="h-auto"
                      name="password"
                      value={this.state.login.password}
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <div className="mt-3">
                    {/* <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</Link> */}
                    <button
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={this.handleOnClick}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-2">
                    <button
                      type="button"
                      className="btn btn-block btn-facebook auth-form-btn"
                    >
                      <i className="mdi mdi-facebook mr-2"></i>Connect using
                      facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/user-pages/register-1" className="text-primary">
                      Create
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
