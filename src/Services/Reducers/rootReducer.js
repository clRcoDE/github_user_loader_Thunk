import { GET_USERS_BEGIN, GET_USERS_SUCCESS, GET_USERS_FAILURE } from '../types'


const initialState = {
    loading: false,
    error: null,
    id: 0,
    items: []

}


export default rootReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_USERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                item: action.payload

            }
        case GET_USERS_FAILURE:
            return {
                ...state,
                error: getErrorMessage(),
                loading: false,
                item: []
            }
        default:
            return state
    }
}