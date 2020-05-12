import React, { Component } from 'react';
import { Table, Spinner } from 'reactstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Stock extends Component {

    //초기 상태 선언
    constructor() {
        super();
        this.state = {
            loading: true,
            results: [],
            errors: {}
        };
    }

    async componentDidMount () {
        axios
            .get('http://131.181.190.87:3000/stocks/symbols')
            .then(res => this.setState( {results: res.data, loading: false}))
            .catch(err => this.setState({errors: err, loading: false}))
        
    }



    render() {

        //상태값 재선언
        const {loading, results, errors} = this.state;
        console.log(results);



        return (
            loading ? (
                <Spinner color="primary" />
            ) : (
                <div className="Landing">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <h1 className="display-4 text-center">
                                Stock Info
                            </h1>
                            <p className="lead text-center">
                                {"welcom"}
                            </p>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th className="text-center" width="10%">No</th>
                                        <th className="text-center" width="40%">Name</th>
                                        <th className="text-center" width="20%">Symbol</th>
                                        <th className="text-center" width="30%">Industry</th>
                                    </tr>
                                </thead>
                                {results.map((item, index) => (
                                    <tbody>
                                        <tr>
                                            <th className="text-center">{index + 1}</th>
                                            <td className="text-center">{item.name}</td>
                                            <td className="text-center">
                                                <Link to='quote'>
                                                    {item.symbol}
                                                </Link>
                                            </td>

                                            <td className="text-center">{item.industry}</td>
                                        </tr>
                                    </tbody>
                                ))}


                            </Table>
                        </div>
                    
                    </div>
                </div>
            )




        )
    }
}
