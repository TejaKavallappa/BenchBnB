var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchBenches: function(){
    //make ajax request
    $.ajax({
      type: 'GET',
      url: 'api/benches',
      success: function(benches){
        ServerActions.receiveAll(benches);
      }//success

    });
  }

};

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
