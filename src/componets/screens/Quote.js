import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Quote extends Component {
    render() {
        return (
            <div className="landing">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <h1 className="display-4 text-center">Stock Info</h1>
                        <p className="lead text-center">
                            {" "}
                        </p>
                        <br />
                        <Table hover>
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Timestamp</th>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Industry</th>
                                <th>Open</th>
                                <th>High</th>
                                <th>Low</th>
                                <th>Close</th>
                                <th>Volumes</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>2020-05-13</td>
                                    <td>Teddy</td>
                                    <td>Teddy</td>
                                    <td>Healthcare</td>
                                    <td>true</td>
                                    <td>13,000</td>
                                    <td>1,800</td>
                                    <td>false</td>
                                    <td>30,000</td>
                                    {/*<th scope="row">{index + 1}</th>*/}
                                    {/*<td>{item.name}</td>*/}
                                    {/*<td>{item.symbol}</td>*/}
                                    {/*<td>{item.industry}</td>*/}
                                </tr>
                            </tbody>

                        </Table>

                    </div>
                 </div>
            </div>

        )
    }
}
