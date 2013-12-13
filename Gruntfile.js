module.exports = function(grunt) {

        grunt.initConfig({
                
                pkg: grunt.file.readJSON( 'package.json' ),
                
                watch: {
                        js: {
                                files: [ 'src/**/*.js', 'wrapper/**/*.js' ],
                                tasks: [ 'clean:tmp', 'requirejs' ],
                                options: {
                                        interrupt: true,
                                        force: true
                                }
                        }
                },
                requirejs: {
                        full: {
                                options: {
                                        baseUrl: 'src/',
                                        name: 'GDC',
                                        out: 'tmp/GDC.js',
                                        optimize: 'none',
                                        findNestedDependencies: true,
                                        onBuildWrite: function( name, path, contents ) {
                                                return require( 'amdclean' ).clean( contents );
                                        },

                                        wrap: {
                                                startFile: 'wrapper/intro.js',
                                                endFile: 'wrapper/outro.js'
                                        }
                                }
                        }
                },
                
                concat: {
                        options: {
                                banner: grunt.file.read( 'wrapper/banner.js' ),
                                process: {
                                        data: { version: '<%= pkg.version %>' }
                                }
                        },
                        full: {
                                src: [ 'tmp/GDC.js'  ],
                                dest: 'build/GDC.js'
                        }
                },
                
                clean: {
                        tmp: [ 'tmp/' ],
                        build: [ 'build/' ]
                },
                
                jshint: {
                        files: [ 'src/**/*.js' ],
                        options: {
                                proto: true,
                                smarttabs: true,
                                boss: true,
                                evil: true,
                                laxbreak: true,
                                undef: true,
                                unused: true,
                                '-W018': true,
                                '-W041': false,
                                eqnull: true,
                                strict: true,
                                globals: {
                                        define: true,
                                        require: true,
                                        Element: true,
                                        window: true,
                                        setTimeout: true,
                                        setInterval: true,
                                        clearInterval: true,
                                        module: true,
                                        document: true,
                                        loadCircularDependency: true
                                }
                        }
                },
                
                uglify: {
                        full: {
                                src: ['<%= concat.full.dest %>'],
                                dest: 'build/GDC.min.js'
                        }
                },
                
                copy: {
                        release: {
                                files: [{
                                        expand: true,
                                        cwd: 'build/',
                                        src: [ '**/*' ],
                                        dest: 'release/<%= pkg.version %>/'
                                }]
                        },
                        link: {
                                files: {
                                        'GDC.js': 'build/GDC.js'
                                }
                        }
                }
        });


	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    // grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
    // grunt.loadNpmTasks( 'grunt-contrib-qunit' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
    
    grunt.registerTask( 'default', [
            'test',
            'clean:build',
            'concat',
            'uglify'
    ]);

    grunt.registerTask( 'test', [
            'clean:tmp',
            'jshint',
            'requirejs'
            // ,
            // 'nodeunit',
            // 'qunit'
    ]);

    grunt.registerTask( 'release', [ 'default', 'copy:release', 'copy:link' ] );

}