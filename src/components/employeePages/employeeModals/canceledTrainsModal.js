"use strict";

var React = require('react');
var auth = require('../../auth/auth.js');
var _ = require('lodash');
var toastr = require('toastr');

var CanceledTrainsModal = React.createClass({
    getDefaultProps: function() {
        return {
            canceledTicketReport: ""
        };
    },

   render: function() {
       return (
           <div className="modal fade" id="CanceledTrainsModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
             <div className="modal-dialog" role="document">
               <div className="modal-content">
                 <div className="modal-header">
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                   <h4 className="modal-title" id="myModalLabel">Canceled Trains Report</h4>
                 </div>
                 <div className="modal-footer">
                   <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                 </div>
               </div>
             </div>
           </div>

       );
     }
});

module.exports = CanceledTrainsModal;
