"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var selectTicketsPanel = React.createClass({
   render: function() {
       return (
           <div className="col-md-8">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <h1>Placeholder - Placeholder</h1>
                      <br />
                           <table className="table table-bordered table-striped">
                               <tr>
                                  <td rowSpan="2"></td>
                                  <td className="text-center" colSpan="3">Placeholder - Placeholder</td>
                              </tr>
                              <tr>
                                  <td className="text-center">28th Feb 16:00 - 17:00</td>
                                  <td className="text-center">28th Feb 16:00 - 17:00</td>
                                  <td className="text-center">28th Feb 16:00 - 17:00</td>
                              </tr>
                              <tr>
                                  <td className="text-center vert-align">Standard</td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£40:50</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£40:50</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£40:50</p>
                                       </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td className="text-center vert-align">First Class</td>
                                      <td className="text-center">
                                          <div className="radio">
                                             <label>
                                               <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                             </label>
                                             <p className="text-center ticketBookMoney">£40:50</p>
                                           </div>
                                      </td>
                                      <td className="text-center">
                                          <div className="radio">
                                             <label>
                                               <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                             </label>
                                             <p className="text-center ticketBookMoney">£40:50</p>
                                           </div>
                                      </td>
                                      <td className="text-center">
                                          <div className="radio">
                                             <label>
                                               <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                             </label>
                                             <p className="text-center ticketBookMoney">£40:50</p>
                                           </div>
                                      </td>
                              </tr>
                           </table>
                   </div>
               </div>
               <Link to="app"><button className="btn btn-primary">Back</button></Link>
               <br/><br/>
           </div>
       );
     }
});

module.exports = selectTicketsPanel;
