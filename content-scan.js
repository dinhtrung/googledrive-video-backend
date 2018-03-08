const request = require('request');
var appConfig = {
  "name": "Video Portal",
  "pageTitle": "ECAS Video Portal",
  "detectMsisdnUrl": "http://info.cosmosalliedservices.ng/i.php",
  "subInfoUrl": "http://info.cosmosalliedservices.ng:9100/web-service/subscriber-lookup",
  "languages": ["en", "ha", "yo", "ar"],
  "videoListUrl": "http://ecas.ng:21935/",
  "videoAbsUrl": "http://ecas.ng/#/v/",
  "subProducts": [{
    "id": "6041",
    "code": "Comedy Video Clips",
    "driveId": "1pIb7T4bq3HRTJVA90tqSnwvdYNwdZima",
    "broadcastShortcode": "5310"
  }, {
    "id": "6021",
    "code": "Zauren Mukewaya",
    "description": "An interactive docu-feature service in which tries to capture life at its roots, and the unseen contributors to the way society is engineered.",
    "driveId": "1rVmNeduE58V4wKUBefy1-87Tv2slhK4Y",
    "broadcastShortcode": "5310"
  }, {
    "id": "6025",
    "code": "Zauren Shakatawa",
    "description": "Interesting entertainment based service which is simply a light talk session with our favorite celebrities, who have graced the entertainment world with their talents.",
    "driveId": "1rE-PwxLD4WvndPv_sVLBzIAYPuqs9bNE",
    "broadcastShortcode": "5310"
  }, {
    "id": "6029",
    "code": "Zauren Zance",
    "description": "An issues based discourse forum, which thrives on the current status of the social landscape to explore pervading matters that are of concern to viewers.",
    "driveId": "1qnPWvt2_e7my8vmujn4Cz8aZOSfY9Pkm",
    "broadcastShortcode": "5310"
  }, {
    "id": "6033",
    "code": "Being Healthy",
    "description": "Health based service which suggests expert’s unique methods with its own set of considerations, challenges, advantages, and disadvantages.",
    "driveId": "1ODaQZhmnHLx-wZfvNAkM3ev1YS186dan",
    "broadcastShortcode": "5310"
  }, {
    "id": "6037",
    "code": "Daily Life Nuggets",
    "description": "This service gives valuable life nuggets which lets you understand the way to lead life and to keep yourself composed with positivity.",
    "driveId": "1jORFVbHSIeaY0yALUlcSceT_0H49MUuL",
    "broadcastShortcode": "5310"
  }, {
    "id": "6045",
    "code": "Islam Eeman Booster",
    "driveId": "1cDeDFR2GnX861Jf4EP96NVRId2EcC6CQ",
    "languages": {
      "en": "1cDeDFR2GnX861Jf4EP96NVRId2EcC6CQ",
      "ar": "1iQBhwzbZ8KAqjVgvvzDyOpJCeUF6VHXQ",
      "ha": "1t9xU7-oRhehni7R4nZxwtsNgjvntsjaj"
    },
    "description": "Designed in a way to explore the Islamic belief in whole new way, which could educate the Muslims in their quest to learn more about the Islamic faith.",
    "broadcastShortcode": "5310"
  }, {
    "id": "6049",
    "code": "Islamic Family Affairs",
    "driveId": "1qr__bnmioX48wM6HxUqLYQIDVoGaD8sf",
    "languages": {
       "en": "1qr__bnmioX48wM6HxUqLYQIDVoGaD8sf",
       "ha": "1DrTT4gzeyYlGoXXO4qGhR22ymZSn1emr",
       "ar": "1u8A99PXvbH9CH66umnT9Q-WNuIhzikZS"
    },
    "description": "This service is all about family, its values, its importance and aimed at tutoring the Islamic brothers and sisters on how to live and build a happy family.",
    "broadcastShortcode": "5310"
  }, {
    "id": "6053",
    "code": "Islam and Peace",
    "driveId": "17dvVDE3UsE8uWMqPyqqRrnM8IxbISkBp",
    "languages": {
       "en": "17dvVDE3UsE8uWMqPyqqRrnM8IxbISkBp",
       "ha": "1lY8kW3eVruloe3n_SZOMMyP-Mfg1Tg-J",
       "ar": "1mAgOA5BAvn9XddN-8R7U8gFIc8tthRas"
    },
    "description": "\"Islam is a Religion of Love and Peace\" In this service we talk about the characters of a true Muslim and help them understand Allah's position on the need to live peacefully.",
    "broadcastShortcode": "5310"
  }]
}
 ;
function printSms(f, name) {
  let sms = 'Today ' + name + ' content, ' + f.name + ', click here: ' + appConfig.videoAbsUrl + f.id;
  if (sms.length > 160) {
    var maxLength = sms.length - 160;
    var trimmedString = f.name.substr(0, maxLength);
    trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    sms = 'Today ' + name + ' content, ' + trimmedString + ', click here: ' + appConfig.videoAbsUrl + f.id;
  }
  console.log("'" + sms + "',");
}

function reqContent(driveId, name) {
  request.get(appConfig.videoListUrl + '?size=1000&parents=' + driveId, (err, resp, jsonBody) => {
    if (err) throw err;
    console.log('#### ' + name);
    JSON.parse(jsonBody).forEach((f) => printSms(f, name));
    console.log('# ----- TOTAL COUNT: ' + JSON.parse(jsonBody).length);
  });
}
appConfig.subProducts.forEach((p) => {
  reqContent(p.driveId, p.code);
  if (p.languages) {
    Object.getOwnPropertyNames(p.languages)
    .forEach((k) => reqContent(p.languages[k], p.code + ' - ' + k));
  }
});
