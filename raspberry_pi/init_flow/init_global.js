global.set('DeviceToken', 'hewicrDfuO');
// global.set('DeviceToken', 'maryheng');
global.set('AppVersion', 'bu29218547tsntf2sup0-v1');

console.log('kaa_client')
console.log('DeviceToken:', global.get('DeviceToken'))
console.log('AppVersion:', global.get('AppVersion'))

var deviceToken = global.get('DeviceToken');
var appVersion = global.get('AppVersion');

global.set("entrance", 0)
global.set("exit", 0)
global.set("humidity", 0)
global.set("temp", 0)

msg.payload = 'DeviceToken: ' + deviceToken + '; AppVersion: ' + appVersion;
return msg;
