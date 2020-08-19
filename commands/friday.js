const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    return shedFriday(message);
}

module.exports.config = {
    name: "friday",
    description: "Answers what anime are on friday",
    usage: ".friday",
    accessableby: "Members",
    aliases: ['fri']
}

function shedFriday(message){
    request('https://api.jikan.moe/v3/schedule/friday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.friday).length;
        var i = 0;
        var string = "__**The shows that are on Friday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.friday[i].title +(":**");
            if(t.friday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.friday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.friday[sizeTues-1].title+(":**");
        if(t.friday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.friday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        string = string + "<:secre_pathetic:743119690859020320>";
        console.log(string);
        return message.channel.send(string);
    });
}