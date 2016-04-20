"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

// Each route present in the system is defined here along with the parameters nessesary to visit them.
// Each route has associated name for ease of use in codebase
// Default route defines the initial page to be rendered
// NotFoundRoute defines the page to be rendered if no resource is found
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/passengerPages/passengerHomePage')} />

      <Route name="BookTickets" path="selectTickets/" handler={require('./components/passengerPages/bookTicketsPage')} />
      <Route name="SelectDeliveryMethod" path="selectTickets/SelectDeliveryMethod/" handler={require('./components/passengerPages/deliveryOptionPage')} />
      <Route name="Payment" path="selectTickets/SelectDeliveryMethod/paymentPage/" handler={require('./components/passengerPages/paymentPage')} />

      <Route name="EmployeeHome" path="employeeHomePage/" handler={require('./components/employeePages/employeeHomePage')} />
      <Route name="EmployeeBookTickets" path="employeeHomePage/employeeSelectTickets/" handler={require('./components/employeePages/employeeBookTicketsPage')} />
      <Route name="EmployeeConfirmBooking" path="employeeHomePage/employeeSelectTickets/employeeConfirmBooking/" handler={require('./components/employeePages/employeeConfirmBookingPage')} />

      <Route name="AdminHome" path="adminHomePage/" handler={require('./components/adminPages/adminHomePage')} />
      <Route name="ManageStations" path="adminHomePage/manageStations" handler={require('./components/adminPages/stationManagementPage')} />
      <Route name="ManageTrains" path="adminHomePage/manageTrains" handler={require('./components/adminPages/trainManagementPage')} />
      <Route name="ManageSchedule" path="adminHomePage/manageSchedule" handler={require('./components/adminPages/scheduleManagementPage')} />
      <Route name="ManageRoutes" path="adminHomePage/manageRoutes" handler={require('./components/adminPages/routeManagementPage')} />
      <Route name="ManageAccounts" path="adminHomePage/manageAccounts" handler={require('./components/adminPages/manageAccountsPage')} />

      <Route name="SigninPage" path="signin/" handler={require('./components/accountManagement/signinPage')} />
      <Route name="Registration" path="registration/" handler={require('./components/accountManagement/registrationPage')} />
      <Route name="MyAccount" path="myAccount/" handler={require('./components/accountManagement/myAccountPage')} />
      <Route name="EditAccountDetails" path="myAccount/editAccount" handler={require('./components/accountManagement/editAccountDetailsPage')} />
      <Route name="ManageWallet" path="myAccount/ManageWallet" handler={require('./components/accountManagement/manageWalletPage')} />
      <Route name="ViewTickets" path="myAccount/ViewTickets" handler={require('./components/accountManagement/viewTicketsPage')} />

      <NotFoundRoute handler={require('./components/notFoundPage')} />
    </Route>
);

module.exports = routes;
