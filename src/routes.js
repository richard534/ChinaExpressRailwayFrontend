"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
      <DefaultRoute handler={require('./components/homePage/passengerHomePage')} />
      <Route name="BookTickets" handler={require('./components/bookingTickets/bookTicketsPage')} />
      <Route name="SelectDeliveryMethod" handler={require('./components/deliveryOption/deliveryOptionPage')} />
      <Route name="PaymentPage" handler={require('./components/payment/paymentPage')} />
      <NotFoundRoute handler={require('./components/NotFoundPage')} />
    </Route>
);

module.exports = routes;
