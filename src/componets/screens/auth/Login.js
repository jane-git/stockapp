import React, { Component } from 'react'
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

 class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        // console.log(logInUser);
        // axios
        //     .post("http://131.181.190.87:3000/user/login", logInUser)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err.message));
        this.props.loginUser(userData);
    }


    render() {

        const { email, password, errors } =  this.state;

        return (
            <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log in</h1>
                        <p className="lead text-center">
                            Jane's Stock one Login
                        </p>
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
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(Login);