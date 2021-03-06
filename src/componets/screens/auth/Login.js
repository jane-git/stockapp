import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UncontrolledAlert } from 'reactstrap';
import { loginUser } from "../../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/stock");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/stock");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    // console.log(logInUser);
    // axios
    //     .post("http://131.181.190.87:3000/user/login", logInUser)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.message));
    this.props.loginUser(
      userData,
      this.props.history,
      this.props.location.state ? this.props.location.state.successUrl : null
    );
  }

  render() {
    const { email, password, errors } = this.state;
    console.log(errors.message);

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {errors !== {} ? (
                <UncontrolledAlert color="danger">
                  {errors.message}
                </UncontrolledAlert>) : null} 
          

              <h1 className="display-4 text-center">Log in</h1>
              <p className="lead text-center">Jane's Stock one Login</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-4"
                  value="Log in"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
