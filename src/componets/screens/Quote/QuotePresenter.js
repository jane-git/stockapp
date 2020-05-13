import React from 'react';
import PropTypes from 'prop-types';
import { Table, Spinner } from 'reactstrap';

const QuotePresenter = ({ result, error, loading }) => (
    loading ? (
        <Spinner color="primary"/>
    ) : (
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
 
)


QuotePresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired    
    
};

export default QuotePresenter;