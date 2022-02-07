import { 
    GET_COIN_LIST_START,
    GET_COIN_LIST_SUCCESS,
    GET_COIN_LIST_FAILED,
} from '../../Constent/actionType';

const initialState = {
  isLoading: false,
  error: [],
  coinList : [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_LIST_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_COIN_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        coinList: action.payload
      }

    case GET_COIN_LIST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    
    default:
      return state
  }
}
