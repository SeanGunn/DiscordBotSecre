const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

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
            var string = "The shows that are on Saturday are: \n ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.saturday[i].title);
                string = string + t.saturday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", \n"
            } 
            string = string + " and ";
            string = string + t.saturday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
            return message.channel.send(string);
        });
}