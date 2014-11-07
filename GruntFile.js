/**
 * Created by robert on 2014-05-10.
 */
module.exports = function(grunt){
    grunt.initConfig({
        tasks: {

        },
        requirejs: {
            js: {
                options: {
                    uglify2: {
                        mangle: false
                    },
                    baseUrl: "./js",
                    mainConfigFile: "./js/main.js",
                    name: 'main',
                    out: "./build/main.js",
                    optimize: 'uglify2'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-requirejs');
}