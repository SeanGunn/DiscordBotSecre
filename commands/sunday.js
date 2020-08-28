const sundayShedule = require("./functions/sundayShed");

module.exports.run = async (bot, message, args) => {
    let rt = await sundayShedule.sunF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for sunday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for sunday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "sunday",
    description: "Answers what anime are on sunday",
    usage: ".sunday",
    accessableby: "Members",
    aliases: ['sun']
}
