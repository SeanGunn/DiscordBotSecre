const toShed = require("./functions/todayOrTomorrow");

module.exports.run = async (bot, message, args) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let weekDay = getWeekDay(tomorrow);
    let lowWeekDay = weekDay.toLowerCase();

    let rt = await toShed.tOTF(lowWeekDay);
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for tomorrow.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for tomorrow.");
    } else {
        return message.channel.send(rt);
    }

   // return todayOrTomorrow(message,lowWeekDay);
}

module.exports.config = {
    name: "tomorrow",
    description: "Answers what anime are on tomorrow",
    usage: ".tomorrow",
    accessableby: "Members",
    aliases: ['tomor']
}

function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    let weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    let day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}

