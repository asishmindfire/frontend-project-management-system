import React, { Component } from "react";
import service from "../Api";
import { Link } from "react-router-dom";
// import { ChevronRight } from "react-feather";
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export class Dashboard extends Component {
  state = { project_list: [] };

  componentDidMount() {
    service
      .getAllProjects()
      .then((project_details) => {
        console.log(project_details.data.data);
        this.setState({ project_list: project_details.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-home"></i>
            </span>
            Projects
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          {this.state.project_list &&
            this.state.project_list.map((project) => {
              return (
                <div
                  key={project.projectId}
                  className="col-md-4 stretch-card grid-margin"
                >
                  <div className="card bg-gradient-danger card-img-holder text-white">
                    <div className="card-body">
                      <img
                        src={require("../../assets/images/dashboard/circle.svg")}
                        className="card-img-absolute"
                        alt="circle"
                      />
                      <h3 className="font-weight-normal mb-3">
                        {project.projectname}
                      </h3>
                      <Link
                        style={{ color: "#ffffff" }}
                        to={{
                          pathname: "/general-pages/blank-page",
                          search: "",
                          hash: "",
                          state: { pid: project.projectId },
                        }}
                      >
                        view
                      </Link>
                      {/* <Link
                        style={{ color: "#ffffff" }}
                        to="/general-pages/blank-page"
                        state={{ pid: project.projectId }}
                      >
                        View
                      </Link> */}
                    </div>
                  </div>
                </div>
              );
            })}

          {/* <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <img
                  src={require("../../assets/images/dashboard/circle.svg")}
                  className="card-img-absolute"
                  alt="circle"
                />
                <h4 className="font-weight-normal mb-3">
                  Weekly Sales
                  <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">$ 15,0000</h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
