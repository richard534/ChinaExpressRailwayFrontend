"use strict";

var React = require('react');

var popularRoutesPanel = React.createClass({
   render: function() {
       return (
               <div className="col-md-8">
                   <div className="panel panel-default">
                      <div className="panel-body">
                          <row className="col-md-12" id="PopularRoutesHeading"><h1>Popular Routes</h1></row>
                          <div className="col-md-4">
                              <img src="/images/Shanghai.jpg" alt="..." className="img-thumbnail center-block" width="200" />
                              <p className="text-center"><strong>Beijing-Shanghai</strong></p>
                          </div>
                          <div className="col-md-4">
                              <img src="/images/Dalain.jpg" alt="..." className="img-thumbnail center-block" width="200" />
                              <p className="text-center"><strong>Wuhan-Guangzgou</strong></p>
                          </div>
                          <div className="col-md-4">
                              <img src="/images/Harbin.jpg" alt="..." className="img-thumbnail center-block" width="200" />
                              <p className="text-center"><strong>Harbin-Dalian</strong></p>
                          </div>
                          <div className="col-md-12">
                            <br></br>
                            <p>Welcome to the China Express Railway online ticket booking facility. Here you will be able
                            to search for and purchase your tickets in advance of your journey.</p>
                            <br/>
                            <p>Please select the station you wish to depart from and and arrive at. Then
                            enter your prefered date and time of departure.</p>
                            <br/>
                            <p>The system will automatically find the journeys which most closely match your prefereces.
                            You will then be able to book a ticket for your selected journey.</p>
                          </div>
                      </div>
                    </div>
               </div>
       );
     }
});

module.exports = popularRoutesPanel;
