import React from "react";
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals'
import Cart from "./Components/Cart/Cart";
function App() {
  return (<React.Fragment>
    <Cart></Cart>
    <Header></Header>
    <Meals></Meals>
    <div>
      <h2>Let's get started!</h2>
    </div>
    </React.Fragment>
  );
}

export default App;
