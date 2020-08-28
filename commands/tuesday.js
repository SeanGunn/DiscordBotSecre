const tuesdayShedule = require("./functions/tuesdayShed");


module.exports.run = async (bot, message, args) => {
    let rt = await tuesdayShedule.tF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for tuesday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for tuesday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "tuesday",
    description: "Answers what anime are on tuesday",
    usage: ".tuesday",
    accessableby: "Members",
    aliases: ['tues']
}

