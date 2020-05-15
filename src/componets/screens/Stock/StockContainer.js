// import React, { Component } from 'react';
// import axios from 'axios';
// import StockPresenter from "./StockPresenter";
// import { baseAPIs } from '../../../API';

// export default class StockContainer extends Component {

//     //초기 상태 선언
//     constructor() {
//         super();
//         this.state = {
//             loading: true,
//             results: [],
//             errors: {}
//         };
//     }

//     async componentDidMount () {
//         // axios
//         //     .get('http://131.181.190.87:3000/stocks/symbols')
//         //     .then(res => this.setState( {results: res.data, loading: false}))
//         //     .catch(err => this.setState({errors: err, loading: false}))
        
//         try {

//             const {
//                 data

//             } = await baseAPIs.symbolAPI();
//             console.log(data);

//             this.setState({results: data});
//         } catch {
//             this.setState({
//                 error: "Can't find stock information"
//             });

//         } finally {
//             this.setState({loading: false});
//         }

//     }



//     render() {


//         const {loading, results, errors} = this.state;
//         console.log(results);



//         return (
//             <StockPresenter
//                 loading={loading}
//                 results={results}
//                 error={errors}
//             />          
//         );
//     }
// }

import React, { useEffect, useState} from 'react';
import { baseAPIs } from '../../../API';
import StockPresenter from './StockPresenter';
import { getDefaultNormalizer } from '@testing-library/react';

export default () => {
    const [stocks, setStocks] = useState({
        loading: true,
        results: [],
        resultsError: null

    });

    const getData = async () => {
        const { data } = await baseAPIs.symbolAPI();
        const [results, resultsError] = [data];
        setStocks({
            loading: false,
            results,
            resultsError,
        });
    };


    useEffect(() => {
        getData();
    }, []);

    return <StockPresenter {...stocks} />;

}