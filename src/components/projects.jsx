import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

class Projects extends Component {
  state = {
    Projects: [],
    sortColumn: { colName: "", order: "" },
    pageSize: 2,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: Projects } = await axios.get(
      "http://localhost:3900/api/projects"
    );

    this.setState({ Projects });
  }

  handleSort = (path) => {
    console.log("handleSort", path);
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.colName === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.colName = path;
    }

    this.setState({ sortColumn });
  };

  getSortIcon = (colName) => {
    const { sortColumn } = this.state;

    if (sortColumn.colName !== colName) return null;

    if (sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true" />;
    else return <i className="fa fa-sort-desc" aria-hidden="true" />;
  };

  render() {
    const { Projects, sortColumn } = this.state;

    const projects = _.orderBy(
      Projects,
      [sortColumn.colName],
      [sortColumn.order]
    );

    return (
      <div className="container mt-3">
        <table className="table  ">
          <thead className="App-nav  ">
            <tr>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => this.handleSort("projectTitle")}
              >
                Project Title <i> {this.getSortIcon("projectTitle")}</i>
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => this.handleSort("user.name")}
              >
                User Name <i> {this.getSortIcon("user.name")}</i>
              </th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => this.handleSort("category.categoryName")}
              >
                Category Name
                <i> {this.getSortIcon("category.categoryName")}</i>
              </th>
            </tr>
          </thead>
          <tbody className="text-color ">
            {projects.map((project) => (
              <tr key={project._id} className="mouse-hover">
                <td>{project.projectTitle}</td>
                <td>{project.user.name} </td>
                <td>{project.category.categoryName} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Projects;
