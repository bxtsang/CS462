var key = Object.keys(msg.payload)[0]
var value = msg.payload[key]



msg.topic="INSERT INTO iotg5." + key + " VALUES ("+value+", CONVERT_TZ(now(),'+00:00','+08:00'));"
return msg;
