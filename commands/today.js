const toShed = require("./functions/todayOrTomorrow");

module.exports.run = async (bot, message, args) => {
    let today = new Date();
    let weekDay = getWeekDay(today);
    let lowWeekDay = weekDay.toLowerCase();

    let rt = await toShed.tOTF(lowWeekDay);
    console.log("rt is = "+rt);
    if(rt === undefined){
        return message.channel.send("Their was a problem getting the shedule for today.");
    } else if (rt === 'State is false') {
        return message.channel.send("Their was a problem getting the shedule for today.");
    } else {
        return message.channel.send(rt);
    }
    //return todayOrTomorrow(message,lowWeekDay);
}

module.exports.config = {
    name: "today",
    description: "Answers what anime are on today",
    usage: ".today",
    accessableby: "Members",
    aliases: ['tod']
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

