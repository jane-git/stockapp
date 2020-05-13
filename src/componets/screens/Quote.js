import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { baseAPIs } from '../../API';
import { symbol } from 'prop-types';

export default class Quote extends Component {

    //하나의 객체만 받는다.
    constructor() {
        super();
        this.state = {
            loading: true,
            result: {},
            errors: {}
        };
    }

    async componentDidMount() {
        const { match: {
            params: { symbol }
        }, history: { push }
        } = this.props;
        
        try {
            const { data } = await baseAPIs.quoteAPI(symbol);
            this.setState({result: data});
        } catch {
            this.setState({ error: "Cant't find anything."});
        } finally {
            this.setState({ loading: false});
        }    
    }

    render() {
        const {result, loading, error} = this.state;
        return (
            <div className="Landing">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 className="display-4 text-center">
                        Quote Info
                    </h1>
                        <p className="lead text-center" >
                            {"Quote to get the latest price information by stock symbol"}
                        </p>
                        <br />
                        <Table hover>
                            <thead>
                            <tr>
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
                                    <td>{result.timestamp}</td>
                                    <td>{result.symbol}</td>
                                    <td>{result.name}</td>
                                    <td>{result.industry}</td>
                                    <td>{result.open}</td>
                                    <td>{result.high}</td>
                                    <td>{result.low}</td>
                                    <td>{result.close}</td>
                                    <td>{result.volumes}</td>
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
