import React from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
function App() {
  return (<React.Fragment>
    <Header></Header>
    <MealsSummary></MealsSummary>
    <div>
      <h2>Let's get started!</h2>
    </div>
    </React.Fragment>
  );
}

export default App;
