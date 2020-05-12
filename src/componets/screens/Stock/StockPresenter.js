import React from 'react';
import PropTypes from 'prop-types';
import { Table, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom';


const StockPresenter = ({ loading, results, error }) => {

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
};

StockPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array,
    error: PropTypes.string
    
};

export default StockPresenter;