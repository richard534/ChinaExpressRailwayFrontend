"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/passengerPages/passengerHomePage')} />

      <Route name="BookTickets" path="selectTickets/" handler={require('./components/passengerPages/bookTicketsPage')} />
      <Route name="SelectDeliveryMethod" path="selectTickets/SelectDeliveryMethod/" handler={require('./components/passengerPages/deliveryOptionPage')} />
      <Route name="Payment" path="selectTickets/SelectDeliveryMethod/paymentPage/" handler={require('./components/passengerPages/paymentPage')} />

      <Route name="EmployeeHome" path="employeeHomePage/" handler={require('./components/employeePages/employeeHomePage')} />
      <Route name="EmployeeBookTickets" path="employeeHomePage/employeeSelectTickets/" handler={require('./components/employeePages/EmployeeBookTicketsPage')} />
      <Route name="EmployeeConfirmBooking" path="employeeHomePage/employeeSelectTickets/employeeConfirmBooking/" handler={require('./components/employeePages/EmployeeConfirmBookingPage')} />

      <Route name="AdminHome" path="adminHomePage/" handler={require('./components/adminPages/adminHomePage')} />
      <Route name="ManageStations" path="adminHomePage/manageStations" handler={require('./components/adminPages/stationManagementPage')} />
      <Route name="ManageTrains" path="adminHomePage/manageTrains" handler={require('./components/adminPages/TrainManagementPage')} />
      <Route name="ManageSchedule" path="adminHomePage/manageSchedule" handler={require('./components/adminPages/scheduleManagementPage')} />
      <Route name="ManageRoutes" path="adminHomePage/manageRoutes" handler={require('./components/adminPages/routeManagementPage')} />
      <Route name="ManageAccounts" path="adminHomePage/manageAccounts" handler={require('./components/adminPages/manageAccountsPage')} />

      <Route name="SigninPage" path="signin/" handler={require('./components/accountManagement/signinPage')} />
      <Route name="Registration" path="registration/" handler={require('./components/accountManagement/RegistrationPage')} />
      <Route name="MyAccount" path="myAccount/" handler={require('./components/accountManagement/myAccountPage')} />
      <Route name="EditAccountDetails" path="myAccount/editAccount" handler={require('./components/accountManagement/EditAccountDetailsPage')} />
      <Route name="ManageWallet" path="myAccount/ManageWallet" handler={require('./components/accountManagement/ManageWalletPage')} />
      <Route name="ViewTickets" path="myAccount/ViewTickets" handler={require('./components/accountManagement/ViewTicketsPage')} />

      <NotFoundRoute handler={require('./components/NotFoundPage')} />
    </Route>
);

module.exports = routes;
