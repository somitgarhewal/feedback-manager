import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from "./mainComponents/index";
import LoginPage from './mainComponents/loginPage';
import AdminHome from './mainComponents/admin/adminHome';
import AddEmployee from './mainComponents/admin/addEmployee';
import ViewEmployee from './mainComponents/admin/viewEmployee';
import UpdateEmployee from './mainComponents/admin/updateEmployee';
import DeleteEmployee from './mainComponents/admin/deleteEmployee';
import ViewPerformance from './mainComponents/admin/viewPerformance';
import AssignEmployee from './mainComponents/admin/assignEmployee';
import PendingReviews from './mainComponents/employee/pendingReviews';

const AppRoutes = () => { 
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/loginPage" component={LoginPage}/>
      <Route path="/adminHome" component={AdminHome}/>
      <Route path="/addEmployee" component={AddEmployee}/>
      <Route path="/viewEmployee" component={ViewEmployee}/>
      <Route path="/updateEmployee" component={UpdateEmployee}/>
      <Route path="/deleteEmployee" component={DeleteEmployee}/>
      <Route path="/viewPerformance" component={ViewPerformance}/>   
      <Route path="/assignEmployee" component={AssignEmployee} />  
      <Route path="/pendingReviews" component={PendingReviews} />  
    </Switch>
  )
}

export default AppRoutes