// package metadata file for Meteor.js

Package.describe({
  name: 'twbs:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '3.3.4',
  git: 'https://github.com/twbs/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/font/glyphicons-halflings-regular.eot',
    'dist/font/glyphicons-halflings-regular.svg',
    'dist/font/glyphicons-halflings-regular.ttf',
    'dist/font/glyphicons-halflings-regular.woff',
    'dist/font/glyphicons-halflings-regular.woff2',
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js',
  ], 'client');
});