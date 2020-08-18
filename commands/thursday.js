const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

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
        var string = "The shows that are on Thursday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.thursday[i].title);
            string = string + t.thursday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.thursday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}