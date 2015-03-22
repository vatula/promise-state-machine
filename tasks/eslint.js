'use strict';

module.exports = function eslint(grunt) {
  require('load-grunt-tasks')(grunt);

  var task = {
    target: [
      'lib',
      'test',
      'tasks',
      'index.js',
      'Gruntfile.js'
    ]
  };

  return task;
};