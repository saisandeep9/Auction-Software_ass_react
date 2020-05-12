import { Component } from "react";
import Joi from "joi-browser";

class Validation extends Component {
  state = {
    data: {},

    errors: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // if (Object.keys(errors).length !== 0) return;

    //calling back end
    // console.log("data", this.state.data);
    // console.log("calling back end");
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // console.log(e.currentTarget.value);

    //validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.id] = errorMessage;
    else delete errors[input.id];

    //set values in state
    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data, errors });
  };

  validateProperty({ id, value }) {
    const objToValidate = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(objToValidate, schema);
    return error ? error.details[0].message : null;
  }

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  // render() {
  //   return (
  //     <div>
  //       <h1>hello</h1>
  //     </div>
  //   );
  // }
}

export default Validation;
