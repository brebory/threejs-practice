ObjectUtils = (function() {
	var ObjectUtils = {};
	ObjectUtils.forEachProperty = function(enumerable, fn) {
		for (var property in enumerable) {
			fn(property, enumerable[property]);
		}
	};

	ObjectUtils.merge = function(base, ext) {
		this.forEachProperty(ext, function(property, value) {
			if (!base.hasOwnProperty(property)) {
				base[property] = value;
			}
		});
		return base;
	};

	ObjectUtils.randomUniform = function(max) {
		return Math.floor(Math.random() * max);
	};

	return ObjectUtils;
}());