var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');

var BenchConstants = require('../constants/bench_constants');

var _benches = {};
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function(){
  //Return only a copy of _benches
  var benches = [];
  for (var id in _benches){
    benches.push(_benches[id]);
  }
  return benches;
};

var resetBenches = function(benches){
  _benches = {};
  benches.forEach(function(bench){
    _benches[bench.id] = bench;
  });
};

BenchStore.__onDispatch = function(payload){
    switch(payload.actionType){
      case BenchConstants.BENCHES_RECEIVED:
        resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
    }
};

module.exports = BenchStore;
