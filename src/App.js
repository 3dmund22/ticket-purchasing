import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import UpcomingShowsList from './Components/UpcomingShows';
import Checkout from './Components/Checkout';
import QuantitySelection from "./Components/QuantitySelection";
import BillingForm from "./Components/BillingInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={UpcomingShowsList} />
        <Route path="/selectQuantity" Component={QuantitySelection} />
        <Route path="/billingInfo" Component={BillingForm} />
        <Route path="/checkout" Component={Checkout} />

      </Routes>
    </Router>
  );
}

export default App;