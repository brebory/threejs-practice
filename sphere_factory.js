var SphereFactory = (function() {
	var RADIUS = 50,
		SEGMENTS = 16,
		RINGS = 16,
		COLOR = 0xCC0000;

	var defaults = {
		radius: RADIUS,
		segments: SEGMENTS,
		rings: RINGS,
		color: COLOR
	};

	var SphereFactory = function(gfx, options) {
		if (!options) {
			options = {};
		}

		options = ObjectUtils.merge(options, defaults);

		this.options = options;
		this.gfx = gfx;
	}

	SphereFactory.prototype.createSphere = function() {
		var material = new this.gfx.MeshLambertMaterial({
			color: this.options.color
		});

		return new this.gfx.Mesh(
			new this.gfx.SphereGeometry(
				this.options.radius,
				this.options.segments,
				this.options.rings),
			material);
	}

	return  SphereFactory;
}());