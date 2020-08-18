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
    aliases: ['tomor']
}

function todayOrTomorrow(msg,lowWeekDay){
    if(lowWeekDay === 'monday'){
        return shedMonday(msg);
    }else if (lowWeekDay === 'tuesday'){
        return shedTuesday(msg);
    }else if (lowWeekDay === 'wednesday'){
        return shedWednesday(msg);
    }else if (lowWeekDay === 'thursday'){
       return shedThursday(msg);
    }else if (lowWeekDay === 'friday'){
        return shedFriday(msg);
    }
    else if (lowWeekDay === 'saturday'){
        return shedSaturday(msg);
    }else{
        return shedSunday(msg);
    }
}

function getWeekDay(date){
    //Create an array containing each day, starting with Sunday.
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    //Use the getDay() method to get the day.
    var day = date.getDay();
    //Return the element that corresponds to that index.
    return weekdays[day];
}

function shedMonday(message){
    request('https://api.jikan.moe/v3/schedule/monday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.monday).length;
        var i = 0;
        var string = "The shows that are on Monday are: \n";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.monday[i].title);
            string = string + t.monday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ",\n "
        } 
        string = string + " and ";
        string = string + t.monday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    })
}

function shedTuesday(message){
    request('https://api.jikan.moe/v3/schedule/tuesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.tuesday).length;
        var i = 0;
        var string = "The shows that are on Tuesday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.tuesday[i].title);
            string = string + t.tuesday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ",\n "
        } 
        string = string + " and ";
        string = string + t.tuesday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}

function shedWednesday(message){
    request('https://api.jikan.moe/v3/schedule/wednesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.wednesday).length;
        var i = 0;
        var string = "The shows that are on Wednesday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.wednesday[i].title);
            string = string + t.wednesday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.wednesday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}

function shedThursday(message){
    request('https://api.jikan.moe/v3/schedule/thursday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.thursday).length;
        var i = 0;
        var string = "The shows that are on Thursday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.thursday[i].title);
            string = string + t.thursday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.thursday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}

function shedFriday(message){
    request('https://api.jikan.moe/v3/schedule/friday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.friday).length;
        var i = 0;
        var string = "The shows that are on Friday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.friday[i].title);
            string = string + t.friday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.friday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}

function shedSaturday(message){
    request('https://api.jikan.moe/v3/schedule/saturday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.saturday).length;
            var i = 0;
            var string = "The shows that are on Saturday are: \n ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.saturday[i].title);
                string = string + t.saturday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", \n"
            } 
            string = string + " and ";
            string = string + t.saturday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
            return message.channel.send(string);
        });
}

function shedSunday(message){
    request('https://api.jikan.moe/v3/schedule/sunday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.sunday).length;
        var i = 0;
        var string = "The shows that are on Sunday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.sunday[i].title);
            string = string + t.sunday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.sunday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    })
}