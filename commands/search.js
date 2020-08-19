const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

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
        whatSearchingFor = whatSearchingFor+"%20"+args[i];
        console.log(whatSearchingFor);
        i++;
    }
    console.log(whatSearchingFor);
    whatSearchingFor = whatSearchingFor.toLowerCase();
    console.log(whatSearchingFor);
    var a = 1;
    if((type) ==="anime"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor);
    }
    else if((type) ==="ova"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor);
    }
    else if((type) ==="movie"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor);
    }
    else if((type) ==="manga"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor);
    }
    else if((type) ==="novel"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor);
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

function getAnimeMangaSoOn(message,type,search){
    /*try{
        request('https://api.jikan.moe/v3/search/'+type+'?q='+search+'&page=1', function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
        });
    }
    catch(err){
        console.log(err);
    }*/

    try{
        request('https://api.jikan.moe/v3/search/anime?q=Black%20Clover&page=1', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.results).length;
            var string = "__**The top 3 "+type+" for the search "+search+" are: **__\n";
            var i = 0;
            while((sizeTues < 3)&&(i < sizeTues)){
                console.log("Here");
                string = string + "**"+results[i].title+":**\n";
                string = string + "      The synopsis is: \n"+results[i].synopsis+"\n";
                if(t.results[i].score != null){
                    string = string + ("\n      Currently has a score of ")+t.results[i].score+(" on mal.");
                }
                else{
                    string = string + ("\n      Currently there is not a score on mal.");
                }
                i++;
                
            }
            return message.channel.send(string);
        });
    }
    catch(err){
        console.log(err);
        return message.reply("Make sure the spelling is correct for the search to work");
    }
}