const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.").then(msg => {
            msg.delete({ timeout: 10000 })
          })
          .catch(console.error);
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} Have been Banned from The Server!`).then(msg => {
                msg.delete({ timeout: 10000 })
              })
              .catch(console.error);
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