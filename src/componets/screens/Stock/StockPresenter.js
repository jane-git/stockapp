import React, { useCallback } from "react";
import { Table, Spinner, Input } from "reactstrap";
import { Link } from "react-router-dom";

const StockPresenter = ({ loading, results, industries, dataTable }) => {
  const handleChangeSearch = useCallback(
    (type) => (e) => {
      if (type === "text") {
        document.getElementById("search_select").value = "";
      } else {
        document.getElementById("search_text").value = "";
      }
      dataTable.columns(3).search(e.target.value).draw();
    },
    [dataTable]
  );

  return loading ? (
    <Spinner color="primary" />
  ) : (
    <div className="Landing">
      <div className="row">
        <div className="col-md-10 m-auto">
          <h1 className="display-4 text-center">Stock Information</h1>
          <p className="lead text-center">
            <br></br>
            {"'Quote & Price History' : Click on 'symbol'"}<br></br> 
          </p>
          <div className="stock-search-wrapper">
            <Input
              id="search_text"
              type="text"
              placeholder="Industry"
              onChange={handleChangeSearch("text")}
            />
            <span className="stock-search-or">OR</span>
            <Input
              id="search_select"
              type="select"
              onChange={handleChangeSearch("select")}
            >
              <option value="">All Industries</option>
              {industries.map((item, index) => (
                <option value={item} key={`select_industry_${index}`}>
                  {item}
                </option>
              ))}
            </Input>
          </div>

          <Table id="stock_table" hover>
            <thead>
              <tr>
                <th className="text-center" width="10%">
                  No
                </th>
                <th className="text-center" width="40%">
                  Name
                </th>
                <th className="text-center" width="20%">
                  Symbol
                </th>
                <th className="text-center" width="30%">
                  Industry
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={`stock_${index}`}>
                  <th className="text-center">{index + 1}</th>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">
                    <Link to={`/quote/${item.symbol}`}>{item.symbol}</Link>
                  </td>

                  <td className="text-center">{item.industry}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default StockPresenter;
