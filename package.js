/* globals Package, Npm, Cordova */
Package.describe({
  name: 'bratelefant:meteor-push',
  version: '3.0.0',
  summary: 'Push Notifications for Cordova and Web/PWA with Firebase (FCM).',
  git: 'https://github.com/bratelefant/meteor-push.git'
})

Npm.depends({
  'firebase-admin': '9.12.0',
  firebase: '9.1.2',
  events: '3.3.0'
})

Cordova.depends({
  '@havesource/cordova-plugin-push': '3.0.1',
  'cordova-plugin-device': '2.0.3'
})

Package.onUse(api => {
  api.versionsFrom(['1.8', '2.3'])
  api.use(['tracker'], ['web.browser', 'web.cordova'])
  api.use(['accounts-base'], ['web.browser', 'web.cordova', 'server'], { weak: true })

  api.use([
    'ecmascript',
    'check',
    'mongo',
    'ejson',
    'random'
  ], ['client', 'server'])

  // API's
  api.addFiles('lib/server/pushToDevice.js', 'server')
  api.addFiles('lib/server/internalMethods.js', 'server')

  api.mainModule('lib/client/cordova.js', ['web.cordova'])
  api.mainModule('lib/client/web.js', ['web.browser'])
  api.mainModule('lib/server/pushToDB.js', ['server'])
})
