// To send through MQTT to dashboard 
var deviceToken = global.get('DeviceToken');
var appVersion = global.get('AppVersion');

msg.topic = 'kp1/' + appVersion + '/dcx/' + deviceToken + '/json';

// Declare variables
var readings = msg.payload.items[0].readings;
var tempGov = global.get('tempGov');

// Get readings from station ID S111
for (var index in readings) {
    if (readings[index].station_id == "S116") {
        if (readings[index].value != tempGov)
        global.set('tempGov', readings[index].value);
        msg.payload = {}
        msg.payload["tempGov"] = global.get("tempGov")
        msg.payload["tempDif"] = global.get("temp") - global.get("tempGov")
        return msg
    }
}
