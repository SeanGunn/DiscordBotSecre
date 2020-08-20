const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {


    return message.reply("string");
}

module.exports.config = {
    name: "£",
    description: "Shows how many tokens you current own",
    usage: ".£",
    accessableby: "Members",
    aliases: ['£']
}

