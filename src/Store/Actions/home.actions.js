import { 
    GET_COIN_LIST_START,
    GET_COIN_LIST_SUCCESS,
    GET_COIN_LIST_FAILED,
} from '../../Constent/actionType';
import axios  from 'axios';


export const getCoinList = () => {
    return  async (dispatch) => {
        dispatch({type:GET_COIN_LIST_START})
        try{
             const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false`)
              console.log("response===",response.data)
             dispatch({type:GET_COIN_LIST_SUCCESS,payload:response.data})
        }catch(err){
            dispatch({type:GET_COIN_LIST_FAILED,payload:err.response})
        }
   }
}