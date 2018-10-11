"use strict";
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'js/gator.min.js',
                    'js/jquery-3.3.1.min.js',
                    'js/jquery-ui.min.js',
                    'js/jquery.transit.min.js',
                    'js/script.js',
                    'portfolio/slider.js',
                    'portfolio/portfolio.js',
                    'skills/skills.js',
                    'js/validation.js',
                ],
                dest: 'js/concat.js'
            },
            css: {
                src: [
                    'variables.css',
                    'css/style.css',
                    'about-me/about-me-section-style.css',
                    'about-me/about-me-style.css',
                    'contact/contact-style.css',
                    'portfolio/portfolio-style.css',
                    'portfolio/slider-style.css',
                    'skills/skills-style.css',
                    'what-can-i-do-for-you/what-can-i-do-for-you.css',
                ],
                dest: 'css/concat.css'
            }
        },
        cssmin: {
            css: {
                src: 'css/concat.css',
                dest: 'dest/css/styles.min.css'
            }
        },
        uglify: {
            js: {
                src: 'js/concat.js',
                dest: 'dest/js/scripts.min.js'
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/env']
            },
            dist: {
                files: {
                    'js/concat.js': 'js/concat.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [
        'concat:js',
        'concat:css',
        'cssmin:css',
        'babel',
        'uglify:js'
    ]);

};