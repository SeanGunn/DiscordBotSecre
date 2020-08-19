const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    return shedSunday(message);
}

module.exports.config = {
    name: "sunday",
    description: "Answers what anime are on sunday",
    usage: ".sunday",
    accessableby: "Members",
    aliases: ['sun']
}

function shedSunday(message){
    request('https://api.jikan.moe/v3/schedule/sunday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.sunday).length;
        var i = 0;
        var string = "__**The shows that are on Sunday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.sunday[i].title +(":**");
            if(t.sunday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.sunday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.sunday[sizeTues-1].title+(":**");
        if(t.sunday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.sunday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    })
}