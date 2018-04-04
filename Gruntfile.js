module.exports = function(grunt) {
    grunt.initConfig({
		sass: {
			options: {
                includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
            },
            dist: {
				options: {
					outputStyle: 'compressed'
				},
                files: [{
                    'assets/css/isel.min.css': 'assets/css/isel.scss',
				}]
            }
        },
        uglify: {
          my_target: {
            files: {
               'assets/js/isel.min.js': ['assets/js/isel.js'],
              }
            }
        },
        watcher: {
            css: {
                files: ['assets/js/*.js', 'assets/css/*.scss'],
                tasks: ['sass', 'uglify'],
                options: {
                    livereload: true,
                },
            }

        }
    });
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-watcher');
    
    grunt.registerTask("buildcss", ["sass"]);
    grunt.registerTask("buildjs", ["uglify"]);
};


