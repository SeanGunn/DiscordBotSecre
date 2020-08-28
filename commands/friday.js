const fridayShedule = require("./functions/fridayShed");

module.exports.run = async (bot, message, args) => {
    let rt = await fridayShedule.fF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for friday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for friday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "friday",
    description: "Answers what anime are on friday",
    usage: ".friday",
    accessableby: "Members",
    aliases: ['fri']
}

