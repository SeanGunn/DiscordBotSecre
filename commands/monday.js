const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return shedMonday(message);
}

module.exports.config = {
    name: "monday",
    description: "Answers what mondays anime schedule is",
    usage: ".monday",
    accessableby: "Members",
    aliases: ['monday']
}