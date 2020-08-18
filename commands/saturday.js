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
    aliases: ['saturday']
}