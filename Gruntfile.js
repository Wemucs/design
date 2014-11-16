module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Displays the time taken for each task
  require('time-grunt')(grunt);

  grunt.initConfig({
    wemucs: {
      dirs: {
        examples: './examples'
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

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= wemucs.dirs.examples %>/index.html'
        ]
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
    },
  });

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['bower', 'build']);
  grunt.registerTask('serve', ['default', 'connect:livereload', 'watch']);
};
