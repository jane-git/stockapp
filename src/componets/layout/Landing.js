import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Jane's Stock one</h1>
                                <p className="lead">
                                    {' '}
                                    Welcome to “Jane's Stock one” No 1 stock analysts portal site
                                    <br></br>
                                    If you want to see 'Price History', Please Login
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <p className="lead">
                                    {' '}
                                    <br></br>
                                    'Stocks' to see the available companies&nbsp;&nbsp;&nbsp;'Quote' to get the latest price information&nbsp;&nbsp;&nbsp;'Price History' to get the price History by date
                                    </p>
                                </p>                                
                                <hr />
                                <br></br>
                                <Link to="register" className="btn btn-lg btn-info mr-2">
                                    Sign Up
                                </Link>
                                <Link to="login" className="btn btn-lg btn-light">
                                    Login
                                </Link>                                                                                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;