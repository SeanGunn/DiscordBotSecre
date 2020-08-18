const Discord = require("discord.js")
const botconfig = require("../botsettings.json");


module.exports.run = async (bot, message, args) => {
    console.log("In friday");
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
        var string = "The shows that are on Friday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.friday[i].title);
            string = string + t.friday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.friday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}