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