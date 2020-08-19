const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    return shedThursday(message);
}

module.exports.config = {
    name: "thursday",
    description: "Answers what anime are on thursday",
    usage: ".thursday",
    accessableby: "Members",
    aliases: ['thur']
}

function shedThursday(message){
    request('https://api.jikan.moe/v3/schedule/thursday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.thursday).length;
        var i = 0;
        var string = "__**The shows that are on thursday are: **__\n";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.thursday[i].title);
            console.log(t.thursday[i].score);
            string = string +("**") +t.thursday[i].title +(":**");
            if(t.thursday[i].score != "null"){
                string = string + ("\n      Currently has a score of ")+t.thursday[i].score+(" on my mal.");
            }
            else{
                string = string + ("\n      Currently their is not a score on my mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.thursday[sizeTues-1].title+(":**");
        if(t.thursday[sizeTues-1].score != "null"){
            string = string + ("\n      Currently has a score of ")+t.thursday[sizeTues-1].score+(" on my mal.");
        }
        else{
            string = string + ("\n      Currently their is not a score on my mal.");
        }
        string = string +"\n";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}