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
      <Route name="BookTickets" path="selectTickets/" handler={require('./components/bookingTickets/bookTicketsPage')} />
      <Route name="SelectDeliveryMethod" path="selectTickets/SelectDeliveryMethod/" handler={require('./components/deliveryOption/deliveryOptionPage')} />
      <Route name="PaymentPage" path="selectTickets/SelectDeliveryMethod/paymentPage/" handler={require('./components/payment/paymentPage')} />
      <NotFoundRoute handler={require('./components/NotFoundPage')} />
    </Route>
);

module.exports = routes;
