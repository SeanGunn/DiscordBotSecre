const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission('KICK_MEMBERS'))
        message.channel.send("You don't have permission to use that command.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    else {
        
        let member = message.guild.members.cache.get(args);
        console.log(member);
        let member2 = args[0];
        console.log(member2);
        if(member2) {
        try {
            await member.kick();
            console.log('Kicked the user from the discord.');
            message.channel.send(`${member2}, Kicked!`).then(msg => {
                msg.delete({ timeout: 10000 })
            }).catch(console.error);

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