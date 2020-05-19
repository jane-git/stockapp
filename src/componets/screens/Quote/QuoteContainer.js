import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { baseAPIs } from "../../../API";
import QuotePrensenter from "./QuotePresenter";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)((props) => {
  const {
    match: {
      params: { symbol },
    },
    auth: { isAuthenticated },
  } = props;

  const [state, setState] = useState({
    loading: true,
    results: null,
    errors: {},
  });
  const [initTable, setInitTable] = useState(false);
  const [dataTable, setDataTable] = useState(null);

  const fetchData = useCallback(async () => {
    let results = [];
    try {
      const { data } = await baseAPIs.quoteAPI(symbol);
      results = [data];
    } catch {
      setState({ error: "Cant't find anything." });
    } finally {
      setState({ loading: false, results });
      setInitTable(true);
    }
  }, [symbol]);

  const handleDrawChart = useCallback((results) => {
    let labels = [];
    let data = [];
    for (const item of results) {
      labels.push(moment(item.timestamp).format("DD/MM/YYYY"));
      data.push(item.close);
    }
    const ctx = document.getElementById("chart").getContext("2d");
    new window.Chart(ctx, {
      // Select chart type
      type: "line",
      // Data of Chart
      data: {
        labels: labels.reverse(),
        datasets: [
          {
            label: "Closing Price",
            backgroundColor: "transparent",
            borderColor: "#64bbad",
            data: data.reverse(),
          },
        ],
      },
      // Option
      options: {
        legend: {
          display: false,
        },
      },
    });
  }, []);

  const handleClickSearch = useCallback(async () => {
    dataTable.destroy();
    setInitTable(false);
    const sDate = moment(
      document.getElementById("sDate").value,
      "DD/MM/YYYY"
    ).toISOString();
    const eDate = moment(
      document.getElementById("eDate").value,
      "DD/MM/YYYY"
    ).toISOString();

    let results = [];
    try {
      const { data } = await baseAPIs.priceHistoryAPI(symbol, sDate, eDate);
      results = data;
    } catch {
      setState({ error: "Cant't find anything." });
    } finally {
      console.log(results);
      setTimeout(() => {
        setState({
          ...state,
          results,
        });
        setInitTable(true);
        if(results){
          handleDrawChart(results);
        }        
      }, 100);
    }
  }, [dataTable, handleDrawChart, state, symbol]);

  const handleGoToLogin = useCallback(() => {
    props.history.push({
      pathname: "/login",
      state: { successUrl: `/quote/${symbol}` },
    });
  }, [props.history, symbol]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!state.loading && state.results && state.results.length) {
      window.$("#sDate").datepicker({
        uiLibrary: "bootstrap4",
        format: "dd/mm/yyyy",
        value: moment(state.results[0].timestamp)
          .subtract(1, "days")
          .format("DD/MM/YYYY"),
      });
      window.$("#eDate").datepicker({
        uiLibrary: "bootstrap4",
        format: "dd/mm/yyyy",
        value: moment(state.results[0].timestamp).format("DD/MM/YYYY"),
        disableDates: function (date) {
          const sDate = moment(
            document.getElementById("sDate").value,
            "DD/MM/YYYY"
          );
          return sDate < date ? true : false;
        },
      });
    }
  }, [state.loading, state.results]);
  useEffect(() => {
    if (initTable) {
      const dataTable = window.$("#quote_table").DataTable({
        bInfo: false,
        bLengthChange: false,
        pageLength: 6,
        sDom: "lrtip",
      });
      setDataTable(dataTable);
    }
  }, [initTable]);
  return (
    <QuotePrensenter
      {...state}
      initTable={initTable}
      handleClickSearch={handleClickSearch}
      isAuthenticated={isAuthenticated}
      handleGoToLogin={handleGoToLogin}
    />
  );
});
