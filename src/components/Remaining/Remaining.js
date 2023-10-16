import React from "react";
//import { AppContext } from "../Context/AppContext";
import AppZustand from "../AppZustand/AppZustand";

export default function Remaining(){
//const {expenses, budget} = useContext(AppContext);
const { expenses, budget } = AppZustand();
// console.log("budget:", budget);
// console.log("expenses:", expenses);

const totalExpenses = expenses.reduce((total, item) => {
    return(total = total + item.cost);
}, 0);

const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

    return(
        <div className={`alert ${alertType} `}>
            <span>Remaining: {budget - totalExpenses}tg</span>
        </div>
    )
}