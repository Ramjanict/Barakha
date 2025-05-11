import React from "react";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
=======
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <>
      <AdminDashboard />
    </>
>>>>>>> 71cf09d1cd487550be6216f1a4ba94c9cec97d3e
  );
};

export default App;
