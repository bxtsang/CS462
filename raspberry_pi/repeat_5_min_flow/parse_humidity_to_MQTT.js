// To send through MQTT to dashboard 
var deviceToken = global.get('DeviceToken');
var appVersion = global.get('AppVersion');

msg.topic = 'kp1/' + appVersion + '/dcx/' + deviceToken + '/json';

// Declare variables
var readings = msg.payload.items[0].readings;
var humidityGov = global.get('humidityGov');

// Get readings from station ID S111
for (var index in readings) {
    if (readings[index].station_id == "S116") {
        if (readings[index].value != humidityGov)
        global.set('humidityGov', readings[index].value);
        msg.payload = {}
        msg.payload["humidityGov"] = global.get("humidityGov")
        msg.payload["humidityDif"] = global.get("humidity") - global.get("humidityGov")
        return msg
    }
}
