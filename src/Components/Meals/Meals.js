import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableItems from "./AvailableItems";

const Meals=()=>{
    return (
        <React.Fragment>
            <MealsSummary></MealsSummary>
            <AvailableItems></AvailableItems>
        </React.Fragment>
    )
}

export default Meals;