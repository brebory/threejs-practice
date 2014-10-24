MathUtils = (function() {
	var MathUtils = {};

	MathUtils.randomUniform = function(max) {
		return Math.floor(Math.random() * max);
	};

	return MathUtils;
}());