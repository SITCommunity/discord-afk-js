module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= discord-afk-js %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        main: 'dist/<%= index %>.js',
        types: 'dist/<%= index %>.d.ts',
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};