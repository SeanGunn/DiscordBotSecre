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
    let whatSearchingFor;
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(maxAmount);
        let i = 1;
        while(i < maxAmount){
            whatSearchingFor = whatSearchingFor+" "+args[i];
            console.log(whatSearchingFor);
            i++;
        }
        console.log(whatSearchingFor);
    if(((args[0]) !="tv")||((args[0]) !="ova")||((args[0]) !="movie")||((args[0]) !="manga")||((args[0]) !="novel")){
        return message.reply("Enter a correct type after the command to search. The correct types are tv, ova, movie, manga and novel").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
    }else{

        try{
            request('https://api.jikan.moe/v3/search/{'+type+'}?q='+whatSearchingFor+'&page=1', function (error, response, body) {
                console.log('Status:', response.statusCode);
                console.log('Headers:', JSON.stringify(response.headers));
                console.log('Response:', body);
            });
        }
        catch(err){
            console.log(err);
        }
    }
    
   
    return message.reply("<:secre_yes:743119658181197834>");
}

module.exports.config = {
    name: "search",
    description: "Searches for anime based on input",
    usage: ".search",
    accessableby: "Members",
    aliases: ['search']
}