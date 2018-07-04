
const reducer = (state = { currencyData:[],currency:'SGD',key:'price_sgd'}, action) => {
    switch (action.type) {
      case 'SGD':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_sgd'}));
      case 'AUD':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_aud'}));
      case 'EUR':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_eur'}));
      case 'GBP':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_gbp'}));
      case 'USD':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_usd'}));
      case 'VND':
        return (Object.assign({},state,{currencyData:action.currencyData,currency:action.currency,key:'price_vnd'}));
      default:
        return state;
    }
  }
  export default reducer
