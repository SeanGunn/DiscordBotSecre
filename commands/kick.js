const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.").then(m => m.delete(10));
    else {
        let member = message.guild.members.cache.get(args);
        if(member) {
        try {
            await member.kick();
            console.log('Kicked the user from the discord.');
            message.channel.send(`${member}, Kicked!`).then(m => m.delete(10));
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user from the discord",
    usage: ".kick",
    accessableby: "Admins",
    aliases: []
}