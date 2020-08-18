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
    aliases: []
}