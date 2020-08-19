const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

request('https://api.jikan.moe/v3/search/{type}?q=Fate/Zero&page=1', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});

module.exports.run = async (bot, message, args) => {
    let type = args[0];
    let maxAmount = args.length;
    var whatSearchingFor;
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(maxAmount);
    whatSearchingFor = args[1];
    let i = 2;
    while(i < maxAmount){
        whatSearchingFor = whatSearchingFor+" "+args[i];
        console.log(whatSearchingFor);
        i++;
    }
    console.log(whatSearchingFor);
    whatSearchingFor = whatSearchingFor.toLowerCase();
    console.log(whatSearchingFor);
    var a = 1;
    if((type) ==="anime"){
        return getAnimeMangaSoOn(type,whatSearchingFor);
    }
    else if((type) ==="ova"){
        return getAnimeMangaSoOn(type,whatSearchingFor);
    }
    else if((type) ==="movie"){
        return getAnimeMangaSoOn(type,whatSearchingFor);
    }
    else if((type) ==="manga"){
        return getAnimeMangaSoOn(type,whatSearchingFor);
    }
    else if((type) ==="novel"){
        return getAnimeMangaSoOn(type,whatSearchingFor);
    }
    else{
        return message.reply("Enter a correct type after the command to search. The correct types are tv, ova, movie, manga and novel").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
    }
}

module.exports.config = {
    name: "search",
    description: "Searches for anime based on input",
    usage: ".search",
    accessableby: "Members",
    aliases: ['search']
}

function getAnimeMangaSoOn(type,search){
    console.log(1);
    /*try{
        request('https://api.jikan.moe/v3/search/{'+type+'}?q='+search+'&page=1', function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
        });
    }
    catch(err){
        console.log(err);
    }*/

    try{
        request('https://api.jikan.moe/v3/search/{anime}?q=Black%20Clover&page=1', function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
        });
    }
    catch(err){
        console.log(err);

    }
}