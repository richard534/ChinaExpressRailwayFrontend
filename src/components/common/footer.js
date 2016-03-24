"use strict";

var React = require('react');


var Footer = React.createClass({
   render: function() {
       return (
           <footer>
               <div className="container">
                   <div className='row'>
                     <div className='col-md-5'>
                       <br />
                       <p className="text-center">China Express Railway System created by: Damien Coney, Gavin Duffy, John McElroy and Richard Taylor</p>
                     </div>
                 </div>
               </div>
           </footer>
       );
     }
});

module.exports = Footer;
