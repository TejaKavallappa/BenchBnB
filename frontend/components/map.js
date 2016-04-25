var React = require('react');
var BenchStore = require('../stores/bench.js');
var ClientActions = require('../actions/client_actions');

var Map = React.createClass({

  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.mapListener = BenchStore.addListener(this._onChange);
    // ClientActions.fetchBenches();
  },

  componentWillUnmount: function(){
    this.mapListener.remove();
  },

  _onChange: function(){
    var benches = BenchStore.all();

    // debugger;

    benches.forEach(function(bench){
      var myLatLng = {lat: bench.lat, lng: bench.lng};
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: bench.description
      });
    }.bind(this)
  );
  },
  render: function(){
    return (<div className="map" ref="map">
      </div>);
  }
});

module.exports = Map;
