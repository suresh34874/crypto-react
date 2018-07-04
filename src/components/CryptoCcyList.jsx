import React, { Component } from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';

import mockData from '../api/data';
import {getCryptoData} from '../api/api';
const css = require('./CryptoCcyList.css');

class CryptoCcyList extends Component {
    constructor() {
        super();
        this.state = {
            currencyData:[],
            currency:{key:'SGD',value:'price_sgd'}
        };
        this.changeCurrency = this.changeCurrency.bind(this);
        //getCryptoData().then(res=>{this.setState({ currencyData:res})});
        getCryptoData().then(res=>{
            this.props.reduxDispatch({
                type:'SGD',
                currency:'SGD',
                currencyData:res
            })
        });
    }

    changeCurrency(event){
        //let key = event.target.selectedOptions[0].innerText;
        let type = event.target.value;
        //console.log(key+": "+value);
        getCryptoData(type).then(res=>{
           /* this.setState({
                currency:{
                    key:key,
                    value:value
                },
                currencyData:res
                });*/
            this.props.reduxDispatch({
                type:type,
                currency:type,
                currencyData:res
            })
        });
    }

    render() {
        const {reduxState:{currencyData,currency,key}}=this.props;
        //const {state:{currencyData,currency:{key,value}}}=this;
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

export default connect(mapStateToProps,mapDispatchToProps)(CryptoCcyList);
