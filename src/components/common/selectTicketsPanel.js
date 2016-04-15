"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var selectTicketsPanel = React.createClass({
    getDefaultProps: function() {
        return {
            backButtonLink: "",
            sourceStation: "",
            destinationStation: "",
            leftSchedule: {},
            middleSchedule: {},
            rightSchedule: {},
            schedulesFound: true
        };
    },

   render: function() {
       if(!this.props.schedulesFound){
           return (
               <div className="col-md-4">
                  <div className="panel panel-default">
                     <div className="panel-body">
                         <h4>No Tickets Found</h4>
                         <br/>
                         <Link to={this.props.backButtonLink}><button className="btn btn-primary">Back</button></Link>
                         <br/><br/>
                     </div>
                 </div>
             </div>
           );
       } else {

       return (
           <div className="col-md-8">
               <div className="panel panel-default">
                  <div className="panel-body">
                      <h1>{this.props.sourceStation} - {this.props.destinationStation}</h1>
                      <br />
                        <table className="table table-bordered table-striped">
                           <tr>
                              <td rowSpan="2"></td>
                              <td className="text-center" colSpan="3">{this.props.sourceStation} - {this.props.destinationStation}</td>
                          </tr>
                          <tr>
                              <td className="text-center">{this.props.leftSchedule.date}</td>
                              <td className="text-center">{this.props.middleSchedule.date}</td>
                              <td className="text-center">{this.props.rightSchedule.date}</td>
                          </tr>
                          <tr>
                              <td className="text-center vert-align">Standard</td>
                              <td className="text-center">
                                  <div className="radio">
                                     <label>
                                       <input type="radio" name="optionsRadios" onClick={this.props.handleScheduleSelection} id="optionsRadios1" value="1" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
                                   </div>
                              </td>
                              <td className="text-center">
                                  <div className="radio">
                                     <label>
                                       <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
                                   </div>
                              </td>
                              <td className="text-center">
                                  <div className="radio">
                                     <label>
                                       <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
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
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                       </div>
                                  </td>
                          </tr>
                        </table>
                   </div>
               </div>
               <Link to={this.props.backButtonLink}><button className="btn btn-primary">Back</button></Link>
               <br/><br/>
           </div>
       );
     }
 }
});

module.exports = selectTicketsPanel;
