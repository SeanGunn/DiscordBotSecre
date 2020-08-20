const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');


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
        return sSF.shedSunday(msg);
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
        var string = "__**The shows that are on Monday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.monday[i].title +(":**");
            if(t.monday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.monday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.monday[sizeTues-1].title+(":**");
        if(t.monday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.monday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
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
        var string = "__**The shows that are on Tuesday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.tuesday[i].title +(":**");
            if(t.tuesday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.tuesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.tuesday[sizeTues-1].title+(":**");
        if(t.tuesday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.tuesday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
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
        var string = "__**The shows that are on Wednesday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.wednesday[i].title +(":**");
            if(t.wednesday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.wednesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.wednesday[sizeTues-1].title+(":**");
        if(t.wednesday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.wednesday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
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
        var string = "__**The shows that are on Thursday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.thursday[i].title +(":**");
            if(t.thursday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.thursday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.thursday[sizeTues-1].title+(":**");
        if(t.thursday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.thursday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
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
        var string = "__**The shows that are on Friday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.friday[i].title +(":**");
            if(t.friday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.friday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.friday[sizeTues-1].title+(":**");
        if(t.friday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.friday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
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
            var string = "__**The shows that are on Saturday are: **__\n";
            while(i<sizeTues-1){
                string = string +("**") +t.saturday[i].title +(":**");
                if(t.saturday[i].score != null){
                    string = string + ("\n      Currently has a score of ")+t.saturday[i].score+(" on mal.");
                }
                else{
                    string = string + ("\n      Currently there is not a score on mal.");
                }
                i++
                if(i<sizeTues-1)
                    string = string + "\n"
            } 
            string = string + ("\n**")+t.saturday[sizeTues-1].title+(":**");
            if(t.saturday[sizeTues-1].score != null){
                string = string + ("\n      Currently has a score of ")+t.saturday[sizeTues-1].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            string = string +"\n";
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
        var string = "__**The shows that are on Sunday are: **__\n";
            while(i<sizeTues-1){
                string = string +("**") +t.sunday[i].title +(":**");
                if(t.sunday[i].score != null){
                    string = string + ("\n      Currently has a score of ")+t.sunday[i].score+(" on mal.");
                }
                else{
                    string = string + ("\n      Currently there is not a score on mal.");
                }
                i++
                if(i<sizeTues-1)
                    string = string + "\n"
            } 
            string = string + ("\n**")+t.sunday[sizeTues-1].title+(":**");
            if(t.sunday[sizeTues-1].score != null){
                string = string + ("\n      Currently has a score of ")+t.sunday[sizeTues-1].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            string = string +"\n";
            console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    })
}