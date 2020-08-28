const mondayShedule = require("./functions/mondayShed");

module.exports.run = async (bot, message, args) => {
    let rt = await mondayShedule.mF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for monday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for monday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "monday",
    description: "Answers what mondays anime schedule is",
    usage: ".monday",
    accessableby: "Members",
    aliases: ['m']
}

