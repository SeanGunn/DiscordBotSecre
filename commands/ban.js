const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    else {
        let member = message.mentions.members.first();
        console.log(member);
        if(member){
        try {
            await member.ban();
            console.log(member.tag + " was banned.");
            message.channel.send (`${member} Have been Banned from The Server!`).then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a user from the discord.",
    usage: ".ban",
    accessableby: "Admins",
    aliases: []
}