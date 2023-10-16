import React, {useState} from "react";
//import { AppContext } from "../Context/AppContext";
import AppZustand from "../AppZustand/AppZustand";
import EditBudget from "../EditBudget/EditBudget";
import ViewBudget from "../ViewBudget/ViewBudget";

export default function Budget (){
//const {budget, dispatch } = useContext(AppContext);
const { budget, setBudget } = AppZustand();
//беру из Context бюджет и действия
const [isEditing, setIsEditing] = useState(false);

const handleEditClick = () => {
    setIsEditing(true);
};

const handleSaveClick = (value) => {
    setBudget(value);
    setIsEditing(false);
};

    return(
		<div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (

				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
    )
}