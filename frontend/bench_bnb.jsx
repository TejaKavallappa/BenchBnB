var AppDispatcher = require('./dispatcher/dispatcher');
var React = require('react'),
    ReactDOM = require('react-dom');
var ApiUtil = require('./util/api_util');
var BenchStore = require('./stores/bench');
var Search = require('./components/search');


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Search />,
                  document.getElementById('content'));
});
