module.exports = function(grunt){

	grunt.config.init({
		jshint: {
			all: [
			'Gruntfile.js',
			'hello.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};
