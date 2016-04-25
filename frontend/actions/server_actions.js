var BenchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ServerActions = {

  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    }); //AppDispatcher
  }//receiveAll
}; //ServerActions

module.exports = ServerActions;
