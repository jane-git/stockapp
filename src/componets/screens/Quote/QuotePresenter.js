import React from "react";
import PropTypes from "prop-types";
import { Table, Spinner, Button } from "reactstrap";
import moment from "moment";

const QuotePresenter = ({
  loading,
  results,
  initTable,
  handleClickSearch,
  isAuthenticated,
  handleGoToLogin,
}) =>
  loading ? (
    <Spinner color="primary" />
  ) : (
    <div className="Landing">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 className="display-4 text-center">Quote & Price History</h1>
          <br></br> 
          <p className="lead text-center">
            {"The first date set is 'Quote' information."} <br></br> 
            {"'Price History' : Choose a date."}<br></br> 
          </p>
          <br></br> 
          {results && results[0] && (
            <p className="lead text-center">
              {results[0].symbol} - {results[0].name}
            </p>
          )}

          <div className="quote-search-wrapper">
            {isAuthenticated ? (
              <>
                <span className="mr">From</span>
                <input id="sDate" />
                <span className="ml mr">To</span>
                <input id="eDate" />
                <Button
                  className="ml"
                  color="primary"
                  onClick={handleClickSearch}
                >
                  Search
                </Button>
              </>
            ) : (
              <Button
                color="warning"
                className="text-white"
                onClick={handleGoToLogin}
              >
                Login to access stock history
              </Button>
            )}
          </div>
          {initTable ? (
            <>
              <Table id="quote_table" hover>
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
                  {results.map((item, idx) => (
                    <tr key={`quote_${idx}`}>
                      <td>{moment(item.timestamp).format("DD/MM/YYYY")}</td>
                      <td>{item.symbol}</td>
                      <td>{item.name}</td>
                      <td>{item.industry}</td>
                      <td>{item.open}</td>
                      <td>{item.high}</td>
                      <td>{item.low}</td>
                      <td>{item.close}</td>
                      <td>{item.volumes}</td>
                      {/*<th scope="row">{index + 1}</th>*/}
                      {/*<td>{item.name}</td>*/}
                      {/*<td>{item.symbol}</td>*/}
                      {/*<td>{item.industry}</td>*/}
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="chart-wrapper">
                <canvas id="chart"></canvas>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );

QuotePresenter.propTypes = {
  loading: PropTypes.bool,
  results: PropTypes.array,
  initTable: PropTypes.bool,
  handleClickSearch: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  handleGoToLogin: PropTypes.func,
};

export default QuotePresenter;
