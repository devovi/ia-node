
exports.find_led_bf_fn = function (req,result) {

  const events = require('events');
  const eventEmitter = new events.EventEmitter();

  // const purchaseOrderBusinessConfig = require('../../config/purchase_order_business_config.json');

  var preConditionHandler = function preCondition() {
    // console.log("Precondition");
    eventEmitter.emit('pre-status');
  }; eventEmitter.on('pre-condition', preConditionHandler);

  var preStatusHandler = function preStatus() {
    // console.log("Prestatus");
    eventEmitter.emit('business-logic');
  }; eventEmitter.on('pre-status', preStatusHandler);

  var businessLogicHandler = function businessLogic() {
    // console.log('Business Logic');
    var find_led_bo = require('../bo/find_led_bo.js');
    find_led_bo.find_led_bo_fn(req, function(boResult){
      result(boResult);
    });
    // eventEmitter.emit('controls');
  }; eventEmitter.on('business-logic', businessLogicHandler);

  var controlsHandler = function controls() {
    // console.log("Controls");
    // eventEmitter.emit('post-condition');
  }; eventEmitter.on('controls', controlsHandler);

  var postConditionHandler = function postCondition() {
    // console.log("Postcondition");
    // eventEmitter.emit('post-status');
  }; eventEmitter.on('post-condition', postConditionHandler);

  var postStatusHandler = function postStatus() {
    // console.log("Poststatus");
  }; eventEmitter.on('post-status', postStatusHandler);

  eventEmitter.emit('pre-condition');
}
