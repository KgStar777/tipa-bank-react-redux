import React from "react";
import classes from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAC, removeCustomerAC} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customer";
import Close from './images/icons/Close.png'

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()}
        dispatch(addCustomerAC(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAC(customer.id))
    }

    return (
        <div className={classes.App}>
            <div style={{fontSize: "3rem"}}>{cash} $</div>
            <div className={classes.BtnWrapper}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из БД</button>
            </div>
            <div className={classes.Compose}>
                { customers.length > 0 ?
                    <div>
                        {customers.map(customer =>
                            <div key={customer.id} className={classes.Customer}>
                                    {customer.name}
                                <img src={Close}
                                     className={classes.Delete}
                                     onClick={() => removeCustomer(customer)}/>
                            </div>
                        )}
                    </div>
                    :
                    <div className={classes.CustomerNull}> Клиенты отсутствуют! </div>
                    }
            </div>
        </div>
    );
}

export default App;