module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package-lock.json'),
    
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'assets/css/custom.css': 'assets/less/custom.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'assets/css/custom.css': 'assets/less/custom.less'
        }
      }

    },

    watch: {
      files: 'assets/less/custom.less',
      tasks: ['less']
    }
  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('test', ['less', 'watch']);

  grunt.registerTask('default', ['less', 'watch']);

};