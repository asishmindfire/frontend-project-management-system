import React, { Component } from "react";
import { Link } from "react-router-dom";
import service from "../Api";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      register: {
        user_name: "",
        email: "",
        password: "",
        user_role: "",
      },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      register: { ...this.state.register, [e.target.name]: e.target.value },
    });
  }

  handleOnClick(e) {
    e.preventDefault();
    // console.log(`-->>`, this.state.register);
    service
      .userRegistration(this.state.register)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 1) {
          this.props.history.push("/dashboard");
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(`Error from register api ->`, err);
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
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      name="user_name"
                      value={this.state.register.user_name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Email"
                      name="email"
                      value={this.state.register.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                      name="user_role"
                      onChange={this.onChange}
                    >
                      <option hidden value="User_Role">
                        User Role
                      </option>
                      <option value="Developer_Role">Developer</option>
                      <option value="Manager_Role">Manager</option>
                      <option value="Admin_Role">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      name="password"
                      value={this.state.register.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>I agree to all Terms &
                        Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    {/* <Link
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      to="/dashboard"
                    >
                      SIGN UP
                    </Link> */}
                    <button
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={this.handleOnClick}
                    >
                      SIGN UP
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?{" "}
                    <Link to="/user-pages/login" className="text-primary">
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
