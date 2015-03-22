module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Displays the time taken for each task
  require('time-grunt')(grunt);

  grunt.initConfig({
    wemucs: {
      dirs: {
        build: './build',
        examples: './examples',
        scripts: './js',
        vendors: './bower_components'
      }
    },

    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          install: true,
          copy: false
        }
      }
    },

    copy: {
      styles: {
          files: [
            {
              expand: false,
              src: '<%= wemucs.dirs.vendors %>/highlightjs/styles/railscasts.css',
              dest: '<%= wemucs.dirs.build %>/css/highlight_railscasts.css'
            },
            {
              expand: true,
              cwd: '<%= wemucs.dirs.build %>/css',
              src: '**',
              dest: '<%= wemucs.dirs.examples %>/css'
            }
        ]
      },
      scripts: {
        expand: true,
        cwd: '<%= wemucs.dirs.build %>/js',
        src: '**',
        dest: '<%= wemucs.dirs.examples %>/js'
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= wemucs.dirs.build %>/css/app.css': 'scss/app.scss'
        }
      }
    },

    uglify: {
      development: {
        options: {
          beautify: true,
          mangle: true
        },
        files: {
          '<%= wemucs.dirs.build %>/js/wemucs.js' : [
            '<%= wemucs.dirs.vendors %>/jquery/dist/jquery.js',
            '<%= wemucs.dirs.vendors %>/foundation/js/foundation.js',
            '<%= wemucs.dirs.vendors %>/foundation/js/foundation/foundation.topbar.js',
            '<%= wemucs.dirs.vendors %>/highlightjs/highlight.pack.js',
            '<%= wemucs.dirs.scripts %>/app.js',
          ]
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'copy:styles'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        files: [
          '<%= wemucs.dirs.examples %>/*.html'
        ],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= wemucs.dirs.examples %>'
          ]
        }
      }
    }
  });

  grunt.registerTask('build', ['sass', 'uglify']);
  grunt.registerTask('default', ['bower', 'build', 'copy']);
  grunt.registerTask('serve', ['default', 'connect:livereload', 'watch']);
};
