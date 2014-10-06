module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: ["public"],
      }
    },
    shell: {
      options: {
        stdout: true,
        stderr: true,
      },
      bower: {
        command: 'bower install'
      },
    },
    copy: {
      js: {
        files: [{
          cwd: 'dev/js',
          src: '**/*.js',
          expand: true,
          dest: 'public/js',
        }],
      },
      images: {
        files: [{
          cwd: 'dev/images',
          src: '**/*',
          expand: true,
          dest: 'public/images',
        }],
      },
      media: {
        files: [{
          cwd: 'dev/media',
          src: '**/*',
          expand: true,
          dest: 'public/media',
        }],
      },
      fonts: {
        files: [{
          cwd: 'dev/fonts',
          src: '**/*',
          expand: true,
          dest: 'public/fonts',
        }],
      },
    },
    jade: {
      options: {
        pretty: true
      },
      public: {
        files: [{
          cwd: 'dev/jade',
          src: '*.jade',
          dest: 'public/',
          expand: true,
          ext: '.html',
        }],
      },
    },
    stylus: {
      options: {
        compress: false
      },
      public: {
        files: [{
          cwd: 'dev/stylus',
          src: 'main.styl',
          dest: 'public/css',
          expand: true,
          ext: '.css',
        }],
      },
    },
    jshint: {
      options: {
        devel: true,
        curly: true,
        eqeqeq: true,
        immed: false,
        latedef: true,
        newcap: false,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          Modernizr: true,
          jQuery: true,
          $: true, 
          google: true
        }
      },
      files: ['dev/js/*.js']
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dev/js/*.js',
        dest: 'public/js/app.min.js'
      }
    },
    watch: {
      jade: {
        files: ['dev/jade/**/*.jade'],
        tasks: ['jade:public'],
      },
      stylus: {
        files: ['dev/stylus/*.styl'],
        tasks: ['stylus'],
      },
      jshint: {
        files: ['dev/*/*.js'],
        tasks: ['jshint'],
      },
      copy: {
        files: ['dev/*/*.*'],
        tasks: ['copy'],
      },
      scripts: {
        files: ['dev/*/*.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'shell', 'stylus', 'jade', 'copy', 'watch']);
  grunt.registerTask('prod', ['stylus', 'jade', 'copy', 'uglify', 'watch']);

};