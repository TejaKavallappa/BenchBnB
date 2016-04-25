var React = require('react');
var BenchStore = require('../stores/bench.js');
var Index = require('./index.js');
var Map = require('./map.js');

var Search = React.createClass({
  render: function(){
    return (<div>
      <Index />
      <Map />
      </div>);
  }
});


module.exports = Search;
