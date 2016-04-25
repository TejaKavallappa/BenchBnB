var BenchStore = require('../stores/bench');
var React = require('react');
var ClientActions = require('../actions/client_actions');

var Index = React.createClass({

  getInitialState: function(){
    return {benches: BenchStore.all()};
  },

  _onChange: function(){
    this.setState({benches: BenchStore.all()});
  },

  componentDidMount: function(){
    this.indexListener = BenchStore.addListener(this._onChange);
    ClientActions.fetchBenches();
  },
  componentWillUnmount: function(){
    this.indexListener.remove();
  },
  render: function(){
    return (<div>
      <ul>
      {this.state.benches.map(function(bench){
        return <li key={bench.id}>{bench.description}</li>;
      })}
      </ul>
    </div>);
  }

});
module.exports = Index;
