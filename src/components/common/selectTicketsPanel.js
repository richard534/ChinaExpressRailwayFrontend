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

    componentWillReceiveProps: function(nextProps) {

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
                                       <input type="radio" name="optionsRadios" onClick={this.props.handleScheduleSelection} id="leftS" value="3.30" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
                                     <p className="text-center ticketBookMoney">Num Tickets: {this.props.leftSchedule.availableStandardClass}</p>
                                   </div>
                              </td>
                              <td className="text-center">
                                  <div className="radio">
                                     <label>
                                       <input type="radio" name="optionsRadios" id="optionsRadios1" onClick={this.props.handleScheduleSelection} id="midS" value="3.30" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
                                     <p className="text-center ticketBookMoney">Num Tickets: {this.props.middleSchedule.availableStandardClass}</p>
                                   </div>
                              </td>
                              <td className="text-center">
                                  <div className="radio">
                                     <label>
                                       <input type="radio" name="optionsRadios" id="optionsRadios1" onClick={this.props.handleScheduleSelection} id="rightS" value="3.30" />
                                     </label>
                                     <p className="text-center ticketBookMoney">£3.30</p>
                                     <p className="text-center ticketBookMoney">Num Tickets: {this.props.rightSchedule.availableStandardClass}</p>
                                   </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="text-center vert-align">First Class</td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" onClick={this.props.handleScheduleSelection} id="leftF" value="4.60" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                         <p className="text-center ticketBookMoney">Num Tickets: {this.props.leftSchedule.availableFirstClass}</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" onClick={this.props.handleScheduleSelection} id="midF" value="4.60" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                         <p className="text-center ticketBookMoney">Num Tickets: {this.props.middleSchedule.availableFirstClass}</p>
                                       </div>
                                  </td>
                                  <td className="text-center">
                                      <div className="radio">
                                         <label>
                                           <input type="radio" name="optionsRadios" id="optionsRadios1" onClick={this.props.handleScheduleSelection} id="rightF" value="4.60" />
                                         </label>
                                         <p className="text-center ticketBookMoney">£4.40</p>
                                         <p className="text-center ticketBookMoney">Num Tickets: {this.props.rightSchedule.availableFirstClass}</p>
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
