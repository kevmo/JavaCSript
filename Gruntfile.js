module.exports = function(grunt){

	grunt.config.init({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: [
			'Gruntfile.js',
			'hello.js'
			]
		},

		mocha: {
			all: {
				src: ['test/testrunner.html']
			},
			options: {
				run: true
			}
		}


	});



	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');



	grunt.registerTask('test', ['jshint', 'mocha']);
};
