const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    shedWednesday(message);
}

module.exports.config = {
    name: "wednesday",
    description: "Answers what anime are on wednesday",
    usage: ".wednesday",
    accessableby: "Members",
    aliases: ['wed']
}

function shedWednesday(message){
    request('https://api.jikan.moe/v3/schedule/wednesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.wednesday).length;
        var i = 0;
        var string = "__**The shows that are on Wednesday are: **__\n";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.wednesday[i].title);
            console.log(t.wednesday[i].score);
            string = string +("**") +t.wednesday[i].title +(":**");
            if(t.wednesday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.wednesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently their is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.wednesday[sizeTues-1].title+(":**");
        if(t.wednesday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.wednesday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently their is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}