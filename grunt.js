module.exports = function(grunt) {

    // global instally docco and pygments
    // TODO: must be better way
    var commonTasks;
    var project = {

        dirs: {
            docs: 'docs',
            dev: 'application',
            live: 'targets/live'
        },

        files: {

            docs:       '/docs',
            script:     '/script',
            scripts:    '/scripts',
            vendor:     '/scripts/vendor',
            coffee:     '/scripts/coffee',
            javascript: '/scripts/javascript',
            css:        '/css',

            any: '**/*',

            dot: {
                coffee:     '.coffee',
                javascript: '.js',
                html:       '.html'
            }

        }

        },

        tasksConfig = {

            // Remove all junk from compiled only directories
            clean: {
                developer:  project.dirs.dev    + project.files.javascript,
                appDocs:    project.dirs.dev    + project.files.docs,
                docs:       project.dirs.docs,
                coffee: project.dirs.live + project.files.coffee,
                d1: project.dirs.live + project.files.javascript + '/GameEngine.js',
                d2: project.dirs.live + project.files.javascript + '/Planet.js',
                d3: project.dirs.live + project.files.javascript + '/Ship.js',
                d4: project.dirs.live + project.files.javascript + '/SpeedPass.js',
                d5: project.dirs.live + project.files.javascript + '/Sprite.js',
                d6: project.dirs.live + project.files.javascript + '/Star.js',
                d7: project.dirs.live + project.files.javascript + '/Explosion.js',
                d8: project.dirs.live + project.files.javascript + '/Bullet.js',
                d9: project.dirs.live + project.files.javascript + '/GameOver.js',
                v1: project.dirs.live + project.files.vendor + '/jaws.js',
                v2: project.dirs.live + project.files.vendor + '/lodash.0.7.0.js'
            },

            coffee: {
                app: {
                    src: [project.dirs.dev + project.files.coffee + "/" + project.files.any + project.files.dot.coffee],
                    dest: project.dirs.dev + project.files.javascript,
                    options: {
                        // No globals!
                        bare: false,
                        preserve_dirs: true,
                        // Preserve the directory structure of coffee
                        base_path: project.dirs.dev + project.files.coffee
                    }
                }
            },

            beautify: {
                files: [project.dirs.dev + project.files.javascript + "/" + project.files.any + project.files.dot.javascript]
            },

            cp: {
                docs: {
                    src: project.dirs.docs,
                    dest: project.dirs.dev + project.files.docs
                }
            },

            cssmin: {
                docco: {
                    src: [
                        project.dirs.live + project.files.docs + '/docco.css'
                    ],
                    dest: project.dirs.live + project.files.docs + '/docco.css'
                },
                app: {
                    src: [
                        project.dirs.live + project.files.css + '/space.css'
                    ],
                    dest: project.dirs.live + project.files.css + '/space.css'
                }
            },

            docco: {
                coffee: project.dirs.dev + project.files.coffee + '/**/*.coffee'
            },

            // No need to install any plugins
            //
            // Look at the port reload server is running on
            //   e.g. 8001:
            // now open: http://localhost:8001
            //
            // at this point you should see an acceptance
            //
            // Running "watch" task
            // Waiting...Tue Sep 25 2012 10:25:08 GMT-0700 (PDT) Connection accepted.
            //
            // If you don's see "connection accepted" it will not work, you have to initially reload
            // the page if it was already open.
            //
            reload: {
                // Visit this port for reload action
                port: 8001,
                proxy: {
                    host: 'localhost',
                    port: 8000,
                    includeReloadScript: true
                }
            },

            watch: {
                files: [
                    project.dirs.dev + '/' + project.files.any + project.files.dot.html,
                    project.dirs.dev + '/' + project.files.any + project.files.dot.coffee
                ],
                tasks: 'clean:developer coffee beautify reload'
            },

            requirejs: {
                appDir: "application/",
                baseUrl: "scripts/javascript",
                dir: "targets/live",
                //Comment out the optimize line if you want
                //the code minified by UglifyJS.
                //optimize: "none",
                paths: {
                    'jquery':  '../vendor/require-jquery',
                    'lodash': '../vendor/lodash.0.7.0',
                    'jaws': '../vendor/jaws'
                },
                modules: [
                    {
                        name: "main",
                        exclude: ["jquery"]
                    }
                ]
            }
        };

    // Grunt tasks configuration
    grunt.initConfig(tasksConfig);

    // To install npm tasks:
    // $ npm install the-task
    // But these should be in the project git already for clarity
    // There are options to install globally
    grunt.loadNpmTasks('grunt-coffee');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-cp');
    grunt.loadNpmTasks('grunt-reload');
    grunt.loadNpmTasks('grunt-beautify');
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-requirejs');

    grunt.loadTasks('./tasks/');

    // The main tasks.
    commonTasks = 'clean:developer clean:appDocs clean:docs docco cp:docs coffee beautify';
    grunt.registerTask('developer', commonTasks);
    grunt.registerTask('live',      commonTasks + ' requirejs cssmin clean:coffee clean:v1 clean:v2 clean:d1 clean:d2 clean:d3 clean:d4 clean:d5 clean:d6 clean:d7 clean:d8 clean:d9');

    grunt.registerTask('reloadServer', 'server reload watch');
};