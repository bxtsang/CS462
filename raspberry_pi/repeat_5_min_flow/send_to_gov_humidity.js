msg.topic="INSERT INTO iotg5.gov_humidity VALUES (:humidityGov, :humidityDif, CONVERT_TZ(now(),'+00:00','+08:00'));"
return msg;
