
import {getCryptoData} from '../api/api';

export function fetchCryptoData(type){
    return function(dispatch){
        getCryptoData(type).then(res=>{
            dispatch({
                type:type,
                currency:type,
                currencyData:res
            })
        });
    }
    
        
}