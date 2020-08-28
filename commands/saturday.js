const saturdayShedule = require("./functions/saturdayShed");

module.exports.run = async (bot, message, args) => {
    let rt = await saturdayShedule.satF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for saturday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for saturday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "saturday",
    description: "Answers what anime are on saturday",
    usage: ".saturday",
    accessableby: "Members",
    aliases: ['sat']
}
