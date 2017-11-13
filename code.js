
const locations = [ {
    "timestampMs" : "1510502985966",
    "latitudeE7" : 239908105,
    "longitudeE7" : 1205254818,
    "accuracy" : 65,
    "altitude" : 23,
    "verticalAccuracy" : 10
  }, {
    "timestampMs" : "1510502985851",
    "latitudeE7" : 239908105,
    "longitudeE7" : 1205254818,
    "accuracy" : 65,
    "altitude" : 23,
    "verticalAccuracy" : 10
  }, {
    "timestampMs" : "1510475822220",
    "latitudeE7" : 239908025,
    "longitudeE7" : 1205254793,
    "accuracy" : 65,
    "altitude" : 24,
    "verticalAccuracy" : 10
  }, {
    "timestampMs" : "1510473691470",
    "latitudeE7" : 239909145,
    "longitudeE7" : 1205254713,
    "accuracy" : 49
  }, {
    "timestampMs" : "1510473687225",
    "latitudeE7" : 239929916,
    "longitudeE7" : 1205258402,
    "accuracy" : 1414,
    "altitude" : 15,
    "verticalAccuracy" : 58
  }, {
    "timestampMs" : "1510473083063",
    "latitudeE7" : 240406378,
    "longitudeE7" : 1205170445,
    "accuracy" : 10,
    "velocity" : 14,
    "heading" : 173,
    "altitude" : 12,
    "verticalAccuracy" : 3
  }, {
    "timestampMs" : "1510472312675",
    "latitudeE7" : 240688091,
    "longitudeE7" : 1205265130,
    "accuracy" : 30,
    "velocity" : 0,
    "heading" : 239,
    "altitude" : 17,
    "verticalAccuracy" : 3
  }, {
    "timestampMs" : "1510458082596",
    "latitudeE7" : 240737581,
    "longitudeE7" : 1205312654,
    "accuracy" : 5,
    "velocity" : 1,
    "heading" : 15,
    "altitude" : 15,
    "verticalAccuracy" : 6
  }, {
    "timestampMs" : "1510457880054",
    "latitudeE7" : 239908384,
    "longitudeE7" : 1205254778,
    "accuracy" : 65,
    "altitude" : 23,
    "verticalAccuracy" : 10
  }, {
    "timestampMs" : "1510457829137",
    "latitudeE7" : 240765285,
    "longitudeE7" : 1205307583,
    "accuracy" : 5,
    "velocity" : 0,
    "heading" : 276,
    "altitude" : 18,
    "verticalAccuracy" : 3
  }];

const output = [];

locations.forEach(location => {
    const long = location["longitudeE7"] / 10000000;
    const lat = location["latitudeE7"] / 10000000;
    
	const entry = {
	  "starred" : false,
	  "location" : {
	    "region" : {
	      "center" : {
	        "longitude" : 120.52548217773438,
	        "latitude" : 23.990812301635742
	      },
	      "radius" : 75
	    },
	    "localityName" : "",
	    "country" : "台灣",
	    "longitude" : 120.52548217773438,
	    "administrativeArea" : "台灣",
	    "placeName" : "",
	    "latitude" : 23.990812301635742
	  },
	  "creationDate" : "2017-11-11T05:55:08Z",
	  "weather" : {
	    "sunsetDate" : "2017-11-11T09:12:01Z",
	    "temperatureCelsius" : 23,
	    "weatherServiceName" : "HAMweather",
	    "windBearing" : 30,
	    "sunriseDate" : "2017-11-12T22:11:37Z",
	    "conditionsDescription" : "",
	    "pressureMB" : 1012,
	    "visibilityKM" : 6,
	    "relativeHumidity" : 83,
	    "windSpeedKPH" : 20,
	    "weatherCode" : "mostly-cloudy",
	    "windChillCelsius" : 23
	  },
	  "timeZone" : "Asia\/Taipei",
	  "uuid" : "1CFF0BBE30A14B6F89235796C58F7A2G",
	  "duration" : 0
	};
    
    entry["location"]["region"]["center"]["longitude"] = long;
    entry["location"]["region"]["center"]["latitude"] = lat;
       
    entry["location"]["longitude"] = long;
    entry["location"]["latitude"] = lat;
    
    const date = new Date(Number(location["timestampMs"]));
    const createDate = date.toISOString();
    const str = createDate.replace(/\.\d+/, '');
    entry["creationDate"] = str;
    
    if (location["velocity"] == undefined) {
        output.push(entry);
    }
});

console.log(output.length);
//console.log(output);
console.log(JSON.stringify(output));




