const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return shedFriday(message);
}

module.exports.config = {
    name: "friday",
    description: "Answers what anime are on friday",
    usage: ".friday",
    accessableby: "Members",
    aliases: []
}