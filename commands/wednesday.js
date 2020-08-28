const wedsShedule = require("./functions/wednesdayShed");


module.exports.run = async (bot, message, args) => {
    let rt = await wedsShedule.wF();
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for wednesday.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for wednesday.");
    } else {
        return message.channel.send(rt);
    }
}

module.exports.config = {
    name: "wednesday",
    description: "Answers what anime are on wednesday",
    usage: ".wednesday",
    accessableby: "Members",
    aliases: ['wed']
}

