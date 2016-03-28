"use strict";

var React = require('react');

var AdminHomePage = React.createClass({

   render: function() {
       return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Administration Home</h1>
                    <br/>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-default">
                       <div className="panel-body">
                           <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                           <p className="smallPanelTextPadding">Here you can manage the stations available on the system</p>
                           <br/>
                           <button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Stations</button>
                       </div>
                   </div>
               </div>
               <div className="col-md-4">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                          <p className="smallPanelTextPadding">Here you can manage trains that can be scheduled to routes</p>
                          <br/>
                          <button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Trains</button>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="panel panel-default">
                     <div className="panel-body">
                         <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                         <p className="smallPanelTextPadding">Here you can manage the train schedule</p>
                         <br/>
                         <button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Schedule</button>
                     </div>
                 </div>
             </div>

             <div className="col-md-4">
                 <div className="panel panel-default">
                    <div className="panel-body">
                        <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                        <p className="smallPanelTextPadding">Here you can manage the routes available to passengers</p>
                        <br/>
                        <button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Routes</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="panel panel-default">
                   <div className="panel-body">
                       <img className="img-responsive pull-left" width="100" alt="Report" src="/images/reportImage.png"/>
                       <p className="smallPanelTextPadding">Here you can manage employee/admin accounts</p>
                       <br/>
                       <button type="submit" className="btn btn-primary btn-block" id="reportButton">Manage Admin/Employee Accounts</button>
                   </div>
               </div>
           </div>
        </div>
       );
     }
});

module.exports = AdminHomePage;
