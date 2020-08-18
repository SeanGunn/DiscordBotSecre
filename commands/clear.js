const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(message => message.delete(10));
    }

    if(isNaN(args[0])){
        return message.reply("Enter a number after the command to clear messages.").then(message => message.delete(10));
    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => message.delete(10));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount, true).catch(err => message.reply(`Something went wrong... ${err}`));

}

module.exports.config = {
    name: "clear",
    description: "clears message based on the number typed after",
    usage: ".clear",
    accessableby: "Members",
    aliases: ['c', 'purge']
}