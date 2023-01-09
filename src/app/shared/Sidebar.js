import React, { Component } from "react";
import { Plus } from "react-feather";
import { Link, withRouter } from "react-router-dom";
// import { Collapse } from 'react-bootstrap';
// import { Trans } from 'react-i18next';
// import Dropdown from "../Components/Dropdown/Dropdown";
// import AddProject from "./AddProject";
import service from "../Api";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      showDropdown: false,
      project: {
        projectId: 0,
        projectname: "",
        projectdescription: "",
        created_by: 0,
      },
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleOnSubmit() {
    console.log(`======>`, this.state.project);

    service
      .addProject(this.state.project)
      .then((res) => {
        if (res.data.status === 1) {
        } else {
          console.log(`Error in fetch profile =>`, res.data);
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error in fetch profile =>`, err);
        alert(err.message);
      });
  }

  onChange(e) {
    this.setState({
      project: { ...this.state.project, [e.target.name]: e.target.value },
    });
  }

  componentDidMount() {
    service
      .getUserDetails()
      .then((res) => {
        if (res.data.status === 1) {
          console.log("res.data", res.data.data.user_name);
          this.setState({
            project: {
              ...this.state.project,
              created_by: res.data.data.user_id,
            },
          });
          this.setState({ username: res.data.data.user_name });
          // this.onRouteChanged();
          // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
          const body = document.querySelector("body");
          document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
            el.addEventListener("mouseover", function () {
              if (body.classList.contains("sidebar-icon-only")) {
                el.classList.add("hover-open");
              }
            });
            el.addEventListener("mouseout", function () {
              if (body.classList.contains("sidebar-icon-only")) {
                el.classList.remove("hover-open");
              }
            });
          });
        } else {
          console.log(`Error in fetch profile =>`, res.data);
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(`Error in fetch profile =>`, err);
        alert(err.message);
      });
  }

  // toggleMenuState(menuState) {
  //   if (this.state[menuState]) {
  //     this.setState({ [menuState]: false });
  //   } else if (Object.keys(this.state).length === 0) {
  //     this.setState({ [menuState]: true });
  //   } else {
  //     Object.keys(this.state).forEach((i) => {
  //       this.setState({ [i]: false });
  //     });
  //     this.setState({ [menuState]: true });
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   // console.log("componentDidUpdate");
  //   if (this.props.location !== prevProps.location) {
  //     // this.onRouteChanged();
  //   }
  // }

  // onRouteChanged() {
    // console.log("onRouteChanged");
    // document.querySelector("#sidebar").classList.remove("active");
    // Object.keys(this.state).forEach((i) => {
    //   this.setState({ [i]: false });
    // });

    // const dropdownPaths = [
    //   { path: "/apps", state: "appsMenuOpen" },
    //   { path: "/basic-ui", state: "basicUiMenuOpen" },
    //   { path: "/advanced-ui", state: "advancedUiMenuOpen" },
    //   { path: "/form-elements", state: "formElementsMenuOpen" },
    //   { path: "/tables", state: "tablesMenuOpen" },
    //   { path: "/maps", state: "mapsMenuOpen" },
    //   { path: "/icons", state: "iconsMenuOpen" },
    //   { path: "/charts", state: "chartsMenuOpen" },
    //   { path: "/user-pages", state: "userPagesMenuOpen" },
    //   { path: "/error-pages", state: "errorPagesMenuOpen" },
    //   { path: "/general-pages", state: "generalPagesMenuOpen" },
    //   { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    // ];

    // dropdownPaths.forEach((obj) => {
    //   if (this.isPathActive(obj.path)) {
    //     this.setState({ [obj.state]: true });
    //   }
    // });
  // }

  render() {
    return (
      <>
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item nav-profile">
              <a
                href="!#"
                className="nav-link"
                // onClick={(evt) => evt.preventDefault()}
              >
                <div className="nav-profile-image">
                  <img
                    src={require("../../assets/images/faces/face1.jpg")}
                    alt="profile"
                  />
                  <span className="login-status online"></span>
                  {/* change to offline or busy as needed */}
                </div>
                <div className="nav-profile-text">
                  <span className="font-weight-bold mb-2">
                    {this.state.username}
                  </span>
                  <span className="text-secondary text-small">
                    Project Manager
                  </span>
                </div>
                <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
              </a>
            </li>

            <li className="nav-item active">
              <div className="sidebar_link_div">
                <Link className="nav-link" to="/dashboard">
                  <span className="menu-title">My Projects</span>
                  <Plus
                    data-bs-toggle="modal" // Remove -bs
                    data-bs-target="#addTicketModal" // Remove -bs
                    onClick={(e) => e.preventDefault()}
                    style={{ marginLeft: "90px" }}
                  />
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <div
          className="modal fade"
          id="addTicketModal"
          tabIndex="-1"
          aria-labelledby="addTicketModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addTicketModalLabel">
                  Add Project
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal" // Remove -bs
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Project Name:
                  </label>
                  <input
                    type="text"
                    name="projectname"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Enter project name"
                    value={this.state.project.projectname}
                    onChange={this.onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Project Description:
                  </label>
                  <textarea
                    className="form-control"
                    name="projectdescription"
                    id="message-text1"
                    placeholder="Enter project description"
                    value={this.state.project.projectdescription}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal" // Remove -bs
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal" // Remove -bs
                    className="btn btn-primary"
                    onClick={this.handleOnSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  isPathActive(path) {
    // console.log(`===>`, path);
    // console.log(this.props.location.pathname);
    // console.log(`===>`, this.props.location.pathname.startsWith(path));
    return this.props.location.pathname.startsWith(path);
    // return false;
  }

}

export default withRouter(Sidebar);
