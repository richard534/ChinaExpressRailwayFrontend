"use strict";

var React = require('react');


var Footer = React.createClass({
   render: function() {
       return (
           <footer>
               <div className="container">
                   <div className='row'>
                     <div className='col-md-6'>
                       <br />
                       <p>China Express Railway System created by: Damien Coney, Gavin Duffy, John McElroy and Richard Taylor</p>
                       <p>Powered by Dropwizard, mySQL, Hibernate and React</p>
                       <br />
                     </div>
                 </div>
               </div>
           </footer>
       );
     }
});

module.exports = Footer;
