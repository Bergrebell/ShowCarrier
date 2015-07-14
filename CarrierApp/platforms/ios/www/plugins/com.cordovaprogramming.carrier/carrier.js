cordova.define("com.cordovaprogramming.carrier.carrier", function(require, exports, module) { var cordova = require('cordova');

var carrier = {
	getCarrierName : function(successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback,
		 'CarrierPlugin', 'getCarrierName', []);
	},

	getCountryCode : function(successCallback, errorCallback) { 
		cordova.exec(successCallback, errorCallback,
		'CarrierPlugin', 'getCountryCode', []); 
	}
};


module.exports = carrier;
});
