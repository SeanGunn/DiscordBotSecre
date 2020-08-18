const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

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
        var string = "The shows that are on Sunday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.sunday[i].title);
            string = string + t.sunday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.sunday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    })
}