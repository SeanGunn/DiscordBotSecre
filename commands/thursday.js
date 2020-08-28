const thursdayShedule = require("./functions/thursdayShed");

module.exports.run = async (bot, message, args) => {
    let rt = await thursdayShedule.thF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for thursday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for thursday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "thursday",
    description: "Answers what anime are on thursday",
    usage: ".thursday",
    accessableby: "Members",
    aliases: ['thur']
}

