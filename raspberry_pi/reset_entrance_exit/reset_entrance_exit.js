var deviceToken = global.get('DeviceToken');
var appVersion = global.get('AppVersion');

msg.topic = 'kp1/' + appVersion + '/dcx/' + deviceToken + '/json';

global.set("entrance", 0)
global.set("exit", 0)

msg.payload = {}
msg.payload["entrance"] = 0
msg.payload["exit"] = 0
return msg;
