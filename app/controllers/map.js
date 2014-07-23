var args = arguments[0] || {};

var analyticsPageTitle = "Map";
var analyticsPageLevel = "Information";

var url = Alloy.Globals.rootWebServiceUrl;

var json = args[0];

var setAnalyticsPageTitle = function(title) {
	analyticsPageTitle = title;
};
var getAnalyticsPageTitle = function() {
	return analyticsPageTitle;
};
var setAnalyticsPageLevel = function(level) {
	analyticsPageLevel = level;
};
var getAnalyticsPageLevel = function() {
	return analyticsPageLevel;
};

exports.setAnalyticsPageTitle = setAnalyticsPageTitle;
exports.getAnalyticsPageTitle = getAnalyticsPageTitle;
exports.setAnalyticsPageLevel = setAnalyticsPageLevel;
exports.getAnalyticsPageLevel = getAnalyticsPageLevel;

$.navBar.setPageTitle("Map");

	var image = Ti.UI.createImageView({
		image : json.data.museum.map,
		backgroundColor:'transparent', 
		width : 'auto',
		height : 'auto'
	});

	$.mapView.add(image);
	
$.onEnterKioskMode = function() {
	$.navBar.onEnterKioskMode();
};

$.onExitKioskMode = function() {
	$.navBar.onExitKioskMode();
};