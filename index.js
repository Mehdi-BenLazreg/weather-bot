var builder = require('botbuilder'); var restify = require('restify'); 
var apiairecognizer = require('api-ai-recognizer'); 
var request = require('request'); 
//========================================================= // Bot Setup //========================================================= // Setup Restify Server 
var server = restify.createServer(); 
server.listen(process.env.port || process.env.PORT || 3978, function () { console.log('%s listening to %s', server.name, server.url); }); 
// Create chat bot 
var connector = new builder.ChatConnector({ appId: '3c5b679a-c3a1-453c-8999-9dd55465c793', appPassword: 'aGA8683:]nfamgmNTCTF8{*' });
var bot = new builder.UniversalBot(connector);
var recognizer = new apiairecognizer('edabd29d42974a88a290f7fea861611b');
var request = require('request');
var intents = new builder.IntentDialog({ recognizers: [recognizer] }); 


bot.dialog('/',intents); 
intents.matches('smalltalk.greetings.hello',function(session, args){ var fulfillment = builder.EntityRecognizer.findEntity(args.entities, 'fulfillment'); if (fulfillment){ var speech = fulfillment.entity; session.send(speech); }else{ session.send('Sorry...not sure how to respond to that'); } });
intents.matches('smalltalk.agent.age',function(session, args){ var fulfillment = builder.EntityRecognizer.findEntity(args.entities, 'fulfillment'); if (fulfillment){ var speech = fulfillment.entity; session.send(speech); }else{ session.send('Sorry...not sure how to respond to that'); } });
intents.matches('smalltalk.agent.boss',function(session, args){ var fulfillment = builder.EntityRecognizer.findEntity(args.entities, 'fulfillment'); if (fulfillment){ var speech = fulfillment.entity; session.send(speech); }else{ session.send('Sorry...not sure how to respond to that'); } });
intents.matches('whatIsWeather',[ function(session,args){ var city = builder.EntityRecognizer.findEntity(args.entities,'cities'); if (city){ var city_name = city.entity; var url = "http://api.apixu.com/v1/current.json?key=9871a5b63d94475e80692545181704&q=" + city_name; request(url,function(error,response,body){ body = JSON.parse(body); temp = body.current.temp_c; session.send("It's " + temp + " degrees celsius in " + city_name); }); }else{ builder.Prompts.text(session, 'Which city do you want the weather for?'); } }, function(session,results){ var city_name = results.response; var url = "http://api.apixu.com/v1/current.json?key=9871a5b63d94475e80692545181704&q=" + city_name; request(url,function(error,response,body){ body = JSON.parse(body); temp = body.current.temp_c; session.send("It's " + temp + " degrees celsius in " + city_name); }); } ]);
intents.onDefault(function(session){ session.send("Sorry...can you please rephrase?"); });
