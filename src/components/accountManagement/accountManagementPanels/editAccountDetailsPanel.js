"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var EditAccountDetailsPanel = React.createClass({

   render: function() {
       return (
           <div className="col-md-7">
               <div className="panel panel-default">
                   <div className="panel-body">
                       <h4>Sign In Details</h4>
                       <br/>
                       <form className="form-horizontal">
                           <div className="form-group">
                             <label htmlFor="email" className="col-md-3 control-label">Email Address:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="email" id="email" placeholder="Enter Email Address..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label htmlFor="password" className="col-md-3 control-label">Password:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="password" id="password" placeholder="Enter Password..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label htmlFor="confPassword" className="col-md-3 control-label">Confirm Password:</label>
                             <div className="col-md-9">
                                 <input className="form-control" type="password" id="confPassword" placeholder="Confirm Password..." />
                             </div>
                           </div>
                           <hr />
                           <h4>Contact Details</h4>
                           <br/>
                           <div className="form-group">
                             <label htmlFor="firstName" className="col-md-3 control-label">FirstName:</label>
                             <div className="col-md-9">
                                 <input className="form-control" id="firstName" placeholder="Enter First Name..." />
                             </div>
                           </div>
                           <div className="form-group">
                             <label htmlFor="lastName" className="col-md-3 control-label">Last Name:</label>
                             <div className="col-md-9">
                                 <input className="form-control" id="lastName" placeholder="Enter Last Name..." />
                             </div>
                           </div>
                           <br />
                           <div className="form-group">
                               <div className="col-md-9 pull-right">
                                   <button type="submit" className="btn btn-primary btn-block">Update Account Details</button>
                               </div>
                           </div>
                       </form>
                   </div>
                   </div>
                   <Link to="MyAccount"><button className="btn btn-primary">Back</button></Link>
                   <br/><br/>
            </div>
        );
    }
});

module.exports = EditAccountDetailsPanel;
