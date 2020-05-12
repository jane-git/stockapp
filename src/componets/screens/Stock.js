import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

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
                                <th>No</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Industry</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                
                </div>
            </div>
        )
    }
}
