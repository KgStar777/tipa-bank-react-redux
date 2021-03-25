const ADD_CUSTOMER = 'ADD_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER';


const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case ADD_MANY_CUSTOMER:
            return {...state, customers: [...state.customers, ...action.payload]}
        default:
            return state
    }
}

export const addCustomerAC = (payload) =>({type: ADD_CUSTOMER, payload})
export const removeCustomerAC = (payload) =>({type: REMOVE_CUSTOMER, payload})
export const addManyCustomersAC = (payload) =>({type: ADD_MANY_CUSTOMER, payload})