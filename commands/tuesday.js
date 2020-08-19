const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    shedTuesday(message);
}

module.exports.config = {
    name: "tuesday",
    description: "Answers what anime are on tuesday",
    usage: ".tuesday",
    accessableby: "Members",
    aliases: ['tues']
}

function shedTuesday(message){
    request('https://api.jikan.moe/v3/schedule/tuesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.tuesday).length;
        var i = 0;
        var string = "__**The shows that are on Tuesday are: **__\n";
        while(i<sizeTues-1){
            console.log(t.tuesday[i].title);
            console.log(t.tuesday[i].score);
            string = string +("**") +t.tuesday[i].title +(":**");
            if(t.tuesday[i].score != "null"){
                string = string + ("\n      Currently has a score of ")+t.tuesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently their is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.tuesday[sizeTues-1].title+(":**");
        if(t.tuesday[sizeTues-1].score != "null"){
            string = string + ("\n      Currently has a score of ")+t.tuesday[sizeTues-1].score+(" on mal.");
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