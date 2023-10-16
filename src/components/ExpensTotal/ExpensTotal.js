import React from "react";
//import { AppContext } from "../Context/AppContext";
import AppZustand from "../AppZustand/AppZustand";

export default function ExpensTotal (){
    const {expenses} = AppZustand();

    const totalExpenses = expenses.reduce((total, item) =>{
        return(total =total+ item.cost);
    },0);

    return(
        <div className="alert alert-primary">
            <span>Spent so far: {totalExpenses}tg</span>
        </div>
    )
}