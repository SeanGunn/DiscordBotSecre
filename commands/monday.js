const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    return shedMonday(message);
}

module.exports.config = {
    name: "monday",
    description: "Answers what mondays anime schedule is",
    usage: ".monday",
    accessableby: "Members",
    aliases: ['m']
}

function shedMonday(message){
    request('https://api.jikan.moe/v3/schedule/monday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.monday).length;
        var i = 0;
        var string = "__**The shows that are on Monday are: **__\n";
        while(i<sizeTues-1){
            console.log(t.monday[i].title);
            console.log(t.monday[i].score);
            string = string +("**") +t.monday[i].title +(":**");
            if(t.monday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.monday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.monday[sizeTues-1].title+(":**");
        if(t.monday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.monday[sizeTues-1].score+(" on mal.");
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