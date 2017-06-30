module.exports = function(grunt) {

	// config -----------------------------------------------------------------

	grunt.initConfig({

		// task 1 -------------------------------------------------------------

		concat: {
			js: {
				src: [
					"app/scripts/*/**/**.js",
					"app/scripts/app.js"										
				],
				dest: "app/builds/app.full.js"
			},
			css: {
				src: [
					"app/styles/app.css"
				],
				dest: "app/builds/app.full.css"
			}			
		},
		
		// jshint -------------------------------------------------------------

		jshint: {
			options: {
				jshintrc: ".jshintrc",
			},
			files: [
				"app/builds/app.full.js"
			]
		},

		// babel --------------------------------------------------------------

		babel: {	
			dist: {
				files: {
					"app/builds/app.full.js": "app/builds/app.full.js"
				}
			}
		},

		// uglify -----------------------------------------------------------

		//
		// contrib-uglify does not support ES2015.
		//

		uglify: {
			js: {
				src: 'app/builds/app.full.js',
				dest: 'app/builds/app.min.js'
			},
		},

		// cssmin -----------------------------------------------------------

		cssmin: {
			css: {
				src: "app/builds/app.full.css",
				dest: "app/builds/app.min.css"
			}
        }		
	});

	// load -------------------------------------------------------------------


	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");	
	grunt.loadNpmTasks("grunt-contrib-uglify");	
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-babel");		

	// register ---------------------------------------------------------------

	grunt.registerTask("default", [
		"concat", 
		"jshint",
		"babel",
		"uglify",
		"cssmin"
	]);
}
