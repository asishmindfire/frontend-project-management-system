import axios from "axios";

const baseUrl = "http://localhost:8080";

class ProjectService {
  getAllProjects() {
    return axios.get(baseUrl + "/fetchallprojects");
  }

  getAllUser() {
    return axios.get(baseUrl + "/fetch-all-user");
  }

  getAllCategories() {
    return axios.get(baseUrl + "/get-all-categories");
  }

  getComments(request_data) {
    return axios.post(baseUrl + "/get-comments", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  getUserById(request_data) {
    return axios.post(baseUrl + "/get-user-by-userId", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  getUserDetails() {
    return axios.get(baseUrl + "/profile", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("usertoken"),
      },
    });
  }

  userLogin(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/login", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  userRegistration(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/register", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  addBoard(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/insert-board", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  removeBoard(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/remove-board", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  fetchTicketsByUserid(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/tickets-by-userid", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  addTicket(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/insert-ticket", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  removeTicket(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/remove-ticket", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  dragAndDropFunctionality(request_data) {
    // console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/update-board", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  updateCard(request_data) {
    console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/update-ticket", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("usertoken"),
      },
    });
  }

  addComment(request_data) {
    console.log(`=========>>>`, request_data);
    return axios.post(baseUrl + "/add-comment", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: localStorage.getItem("usertoken"),
      },
    });
  }

  updateComment(request_data) {
    console.log(`=========>>> requr`, request_data);
    // return;
    return axios.post(baseUrl + "/update-comment-by-ticketId", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    });
  }

  deleteComment(request_data) {
    console.log(`=========>>> requr`, request_data);
    return axios.post(baseUrl + "/delete-comment-by-ticketId", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    });
  }

  addProject(request_data) {
    console.log(`=========>>> requr`, request_data);
    return axios.post(baseUrl + "/insert-project", request_data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    });
  }
}

export default new ProjectService();
