const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    shedWednesday(message);
}

module.exports.config = {
    name: "wednesday",
    description: "Answers what anime are on wednesday",
    usage: ".wednesday",
    accessableby: "Members",
    aliases: []
}