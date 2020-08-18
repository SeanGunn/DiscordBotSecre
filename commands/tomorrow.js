const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var weekDay = getWeekDay(tomorrow);
    var lowWeekDay = weekDay.toLowerCase();
    return todayOrTomorrow(message,lowWeekDay);
}

module.exports.config = {
    name: "tomorrow",
    description: "Answers what anime are on tomorrow",
    usage: ".tomorrow",
    accessableby: "Members",
    aliases: ['tomorrow']
}