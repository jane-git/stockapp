import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { baseAPIs } from '../../../API';
import QuotePrensenter from './QuotePresenter';

export default class QuoteContainer extends Component {

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
            <QuotePrensenter
                loading={loading}
                result={result}
                error={error}
            />
        )
    }
}
