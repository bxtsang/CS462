msg.topic="INSERT INTO iotg5.gov_temp VALUES (:tempGov, :tempDif, CONVERT_TZ(now(),'+00:00','+08:00'));"
return msg;
