import React from "react";
import Validation from "../common/validation";

import Input from "../common/input";
import Joi from "joi-browser";
import auth from "../services/authService";

class Login extends Validation {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(5).max(300),
  };

  doSubmit = async () => {
    console.log("log in", this.state.data);
    const { data } = this.state;
    const success = await auth.login(data.email, data.password);
    console.log("suc", success);
    if (success) {
      window.location = "/welcome";
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="row m-5">
        <div className="col-8 text-center">
          <h2 className="">Welcome To Auction Software</h2>
          <h3 className="">
            log in id :-admin@gmail.com {<br />}password:-password
          </h3>
        </div>

        <div className="col-4 " style={{ width: "60%" }}>
          <div
            className="container  box  float-right  "
            // style={{ width: "0%" }}
          >
            <form onSubmit={this.handleSubmit} className="">
              <h1 className="text-center"> Log in</h1>

              <Input
                id="email"
                label="Email address"
                type="text"
                value={data.email}
                placeholder="Enter email"
                className="form-control "
                onChange={this.handleChange}
                error={errors.email}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                value={data.password}
                placeholder="Password"
                className="form-control "
                onChange={this.handleChange}
                error={errors.password}
              />

              <center>
                <button
                  type="submit"
                  className=" btn btn-primary  btn-block mb-3 mt-3"
                >
                  Sign up
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
