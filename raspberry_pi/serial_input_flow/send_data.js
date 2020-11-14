// To send through MQTT to dashboard 
var deviceToken = global.get('DeviceToken');
var appVersion = global.get('AppVersion');

msg.topic = 'kp1/' + appVersion + '/dcx/' + deviceToken + '/json';

// Declare variables
// var dict = [];
var readings = {};
var stringVal = msg.payload;

var value = stringVal.split(':');

// Check what's in the payload and add to dictionary
if (value[0] == 'temp') {
    if (value[1] != global.get("temp")) {
        global.set("temp", value[1])
        readings['temp'] = parseFloat(value[1]);
    }
    
} else if (value[0] == 'humidity') {
    if (value[1] != global.get("humidity")) {
        global.set("humidity", value[1])
        readings['humidity'] = parseInt(value[1]);
    }
    
} else if (value[0] == 'entrance') {
    global.set("entrance", global.get("entrance") + 1) 
    readings['entrance'] = global.get("entrance");
    
} else if (value[0] == 'exit') {
    global.set("exit", global.get("exit") + 1) 
    readings['exit'] = global.get("exit");
    
} else if (value[0] == 'cubicle') {
    readings['cubicle'] = parseInt(value[1]);
    
}

// Package & send over
// dict.push(readings);
msg.payload = readings;
if (Object.keys(readings).length !== 0){
    return msg;
}
