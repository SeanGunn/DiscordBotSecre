const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
    return shedSaturday(message);
}

module.exports.config = {
    name: "saturday",
    description: "Answers what anime are on saturday",
    usage: ".saturday",
    accessableby: "Members",
    aliases: ['sat']
}
function shedSaturday(message){
    request('https://api.jikan.moe/v3/schedule/saturday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.saturday).length;
            var i = 0;
            var string = "__**The shows that are on Saturday are: **__\n";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.saturday[i].title);
            console.log(t.saturday[i].score);
            string = string +("**") +t.saturday[i].title +(":**");
            if(t.saturday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.saturday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently their is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.saturday[sizeTues-1].title+(":**");
        if(t.saturday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.saturday[sizeTues-1].score+(" on mal.");
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