const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    var today = new Date();
    var weekDay = getWeekDay(today);
    var lowWeekDay = weekDay.toLowerCase();
    return todayOrTomorrow(message,lowWeekDay);
}

module.exports.config = {
    name: "today",
    description: "Answers what anime are on today",
    usage: ".today",
    accessableby: "Members",
    aliases: []
}