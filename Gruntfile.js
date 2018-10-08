"use strict";
module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'js/gator.min.js',
                    'js/jquery-3.3.1.min.js',
                    'js/script.js',
                    'portfolio/portfolio.js',
                    'portfolio/slider.js',
                    'skills/skills.js',
                ],
                dest: 'dest/js/concat.js'
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
                dest: 'dest/css/concat.css'
            }
        },
        cssmin: {
            css: {
                src: 'dest/css/concat.css',
                dest: 'dest/css/styles.min.css'
            }
        },
        uglify: {
            js: {
                src: 'dest/js/concat.js',
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
                    'dest/js/concat.js': 'dest/js/concat.js'
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