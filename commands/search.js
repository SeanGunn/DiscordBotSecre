const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    let type = args[0];
    let maxAmount = args.length;
    var whatSearchingFor;
    var trueName;
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(maxAmount);
    whatSearchingFor = args[1];
    let i = 2;
    while(i < maxAmount){
        whatSearchingFor = whatSearchingFor+"%20"+args[i];
        trueName  = trueName+" "+args[i];
        console.log(whatSearchingFor);
        console.log(trueName);
        i++;
    }
    console.log(whatSearchingFor);
    whatSearchingFor = whatSearchingFor.toLowerCase();
    console.log(whatSearchingFor);
    var a = 1;
    if((type) ==="anime"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="ova"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="movie"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="manga"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="novel"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
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

function getAnimeMangaSoOn(message,type,search,trueName){
    try{
        request('https://api.jikan.moe/v3/search/'+type+'?q='+search+'&page=1', function (error, response, body) {
            var t = JSON.parse(body);
            //t.results.length
            if(Object.keys(t.results).length === null){
                return message.reply("Make sure the spelling is correct for the search to work or the search value just doesn't exist.");
            }else{
                var sizeTues = Object.keys(t.results).length;
                    if(sizeTues >= 3){
                    var string = "__**The top 3 "+type+" for the search "+trueName+" are: **__\n";
                    message.channel.send(string);
                }
                else{
                    var string = "__**The top "+sizeTues+" "+type+" for the search "+trueName+" are: **__\n";
                    message.channel.send(string);
                }
                var i = 0;
                console.log(sizeTues);
                while(i < sizeTues){
                    var string = "**"+t.results[i].title+":**\n";
                    string = string + "The synopsis is: \n"+t.results[i].synopsis;
                    if(t.results[i].score != null){
                        string = string + ("\nCurrently has a score of ")+t.results[i].score+(" on mal.");
                    }
                    else{
                        string = string + ("\nCurrently there is not a score on mal.");
                    }
                    i++;
                    message.channel.send(string);
                    if(i > 2)
                        return "<:secre_pathetic:743119690859020320>";
                }
            }
            
        });
    }
    catch(err){
        console.log(err);
        return message.reply("Make sure the spelling is correct for the search to work");
    }
}