import React, { Component } from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';

import mockData from '../api/data';
import {getCryptoData} from '../api/api';
import {fetchCryptoData} from '../redux/action';
const css = require('./CryptoCcyList.css');


class CryptoCcyList extends Component {
    constructor() {
        super();
        this.state = {
            currencyData:[],
            currency:{key:'SGD',value:'price_sgd'}
        };
        this.changeCurrency = this.changeCurrency.bind(this);
    }
    

    changeCurrency(event){
        let type = event.target.value;
        this.props.dispatch(fetchCryptoData(type));
    }

    render() {
        const {reduxState:{currencyData,currency,key}}=this.props;
        return (<div>
            <div className = {css.cryptocurrencyHeader}>
            <select className = {css.combo} onChange={this.changeCurrency}>
                <option value="SGD">SGD</option>
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="VND">VND</option>
            </select>
            </div>
            {currencyData.map((data,index)=>(
            <div key={data.id} className={css.cryptoRow}>
                <div className={css.cryptoName}>{data.name}</div>
                <div className={css.cryptoPrice}>{currency}{` ${numeral(data[key]).format('0,0.00')}`}</div>
                <div className={data.percent_change_24h<0?css.cryptoChangeRed:css.cryptoChangeGreen}>{`${data.percent_change_24h}%`}</div>
            </div>
            ))}
        </div>);
    }


    componentWillMount(){
        this.props.dispatch(fetchCryptoData("SGD"));
    }

    componentDidMount(){
        console.log('CryptoCcyList mounted');
    }

    componentWillUnmount() {
        console.log('CryptoCcyList un_mounted');
    }

    componentDidCatch(error, info) {
        alert(info);
    }
}

const mapStateToProps = state => {
    return {reduxState:state};
  }


const mapDispatchToProps = dispatch => {
    return {reduxDispatch:dispatch};
  }

export default connect(mapStateToProps)(CryptoCcyList);
