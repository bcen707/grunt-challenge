
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	  options: {
	    // the banner is inserted at the top of the output
	    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
	  },
	  dist: {
	    files: {
	      './js/output.min.js': ['./js/signup.js', './js/us-states.js']
	    }
	  }
	},
	jshint: {
	// define files to lint	
      files: ['./js/signup.js', './js/us-states.js' ],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    cssmin: {
	  minify: {
	    src: './css/main.css',
	    dest: './css/main.min.css'
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};