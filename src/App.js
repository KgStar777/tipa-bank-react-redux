import React from "react";
import classes from './App.module.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return (
        <div className={classes.App}>
            <div style={{fontSize: "3rem"}}>{cash} $</div>
            <div className={classes.BtnWrapper}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
            </div>
        </div>
    );
}

export default App;
