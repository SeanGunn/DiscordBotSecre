const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    shedTuesday(message);
}

module.exports.config = {
    name: "tuesday",
    description: "Answers what anime are on tuesday",
    usage: ".tuesday",
    accessableby: "Members",
    aliases: []
}