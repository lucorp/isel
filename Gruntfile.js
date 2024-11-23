'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/isel.css': 'assets/css/isel.scss',
                }
            }
        },
        uglify: {
            dist: {
                src: 'assets/js/isel.js',
                dest: 'assets/js/isel.min.js'
            },
        },
        watch: {
            scripts: {
                files: ['assets/js/isel.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            stylesheets: {
                files: ['assets/css/isel.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        },
    });

    // Plugin tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['sass', 'uglify']);

};

// grunt.initConfig({
// 	sass: {
// 		options: {
//             implementation: sass,
//             sourceMap: true,
//             includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
//         },
//         dist: {
// 			options: {
// 				outputStyle: 'compressed'
// 			},
//             files: [{
//                 'assets/css/isel.min.css': 'assets/css/isel.scss',
// 			}]
//         }
//     },
//     uglify: {
//       my_target: {
//         files: {
//            'assets/js/isel.min.js': ['assets/js/isel.js'],
//           }
//         }
//     },
//     watcher: {
//         css: {
//             files: ['assets/js/*.js', 'assets/css/*.scss'],
//             tasks: ['sass', 'uglify'],
//             options: {
//                 livereload: true,
//             },
//         }

//     }
// });



