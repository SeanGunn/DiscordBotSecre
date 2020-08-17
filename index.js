const Discord = require('discord.js');
const Jikan = require('jikan-node');
var request = require('request');
const mal = new Jikan();
const bot = new Discord.Client();

const token = 'NzQ0ODE5ODMzOTY2OTUyNTc5.Xzoxhg.m5MoiYBeaF2bWcIAldGaiOvhnvM';

bot.on('ready',() =>{
    console.log('Best bird is online.');
})

/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
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

function getDayAnimeList(date){
    var string = "The shows that are on "+date+" are ";
    request('https://api.jikan.moe/v3/schedule/', function (error, response, body) {
        var t = JSON.parse(body);
        var size = Object.keys(t).length;
        var sizeTues = Object.keys(t.date).length;
        console.log(size);
        var i = 0;
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.date[i].title);
            string = string + t.date[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", "
        } 
        string = string + " and ";
        string = string + t.date[sizeTues-1].title;
        string = string +".";
        console.log(string);
        msg.reply(string);
    })
    return string;
}

bot.on('message', msg=>{
    var temp = msg.content.toLowerCase();
    console.log(temp);
    if(temp == ((".welcome")|| ('.w')|| ('hello')|| ('hi'))){ 
        msg.reply('You are my pet now.');
    }
    else if(temp === (('.schedule')||('sch'))){
        request('https://api.jikan.moe/v3/schedule/', function (error, response, body) {
            //Mon
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.monday).length;
            var i = 0;
            var string = "The shows that are on Monday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.monday[i].title);
                string = string + t.monday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.monday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            //Tues
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.tuesday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Tuesday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.tuesday[i].title);
                string = string + t.tuesday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.tuesday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
           //Wed
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.wednesday).length;
            var i = 0;
            var string = "The shows that are on Wednesday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.wednesday[i].title);
                string = string + t.wednesday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.wednesday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            //Thur
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.thursday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Thursday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.thursday[i].title);
                string = string + t.thursday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.thursday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
            //Fri
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.friday).length;
            var i = 0;
            var string = "The shows that are on Friday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.friday[i].title);
                string = string + t.friday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.friday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            //Sat
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.saturday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Saturday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.saturday[i].title);
                string = string + t.saturday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.saturday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
            //Sun
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.sunday).length;
            var i = 0;
            var string = "The shows that are on Sunday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.sunday[i].title);
                string = string + t.sunday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.sunday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        });
    }
    else if(temp === (('.monday')|| ('.mon'))){
        shedMonday(msg);
    }
    else if(temp === (('.tuesday')|| ('.tue'))){
        shedTuesday(msg);
    }
    else if(temp === (('.wednesday')|| ('.wed'))){
        shedWednesday(msg);
    }
    else if(temp === (('.thursday')|| ('.thu'))){
        shedThursday(msg);
    }
    else if(temp === (('.friday')|| ('.fri'))){
        shedFriday(msg);
    }
    else if(temp === (('.saturday')|| ('.sat'))){
        shedSaturday(msg);
    }
    else if(temp === (('.sunday')|| ('.sun'))){
        shedSunday(msg);
    }
    else if(temp === (('.today')|| ('.tod'))){
        var today = new Date();
        var weekDay = getWeekDay(today);
        var lowWeekDay = weekDay.toLowerCase();
        todayOrTomorrow(msg,lowWeekDay);
    }
    else if(temp === (('.tomorrow')|| ('.nextday'))){
        //What weekday is tomorrow?
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var weekDay = getWeekDay(tomorrow);
        var lowWeekDay = weekDay.toLowerCase();
        todayOrTomorrow(msg,lowWeekDay);
    }
    else{
        console.log('Best bird is getting incorrect messages.');
    }
})

bot.login(token);

function shedMonday(msg){
    
    request('https://api.jikan.moe/v3/schedule/monday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.monday).length;
            var i = 0;
            var string = "The shows that are on Monday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.monday[i].title);
                string = string + t.monday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.monday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        })
     return "";
}
function shedTuesday(msg){
    var string = "The shows that are on Tuesday are ";
    request('https://api.jikan.moe/v3/schedule/tuesday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.tuesday).length;
            var i = 0;
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.tuesday[i].title);
                string = string + t.tuesday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.tuesday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        });
        return "";
}
function shedWednesday(msg){
    request('https://api.jikan.moe/v3/schedule/wednesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.wednesday).length;
        var i = 0;
        var string = "The shows that are on Wednesday are ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.wednesday[i].title);
            string = string + t.wednesday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", "
        } 
        string = string + " and ";
        string = string + t.wednesday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        msg.reply(string);
    });
    return "";
}
function shedThursday(msg){
    request('https://api.jikan.moe/v3/schedule/thursday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.thursday).length;
        var i = 0;
        var string = "The shows that are on Thursday are ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.thursday[i].title);
            string = string + t.thursday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ", "
        } 
        string = string + " and ";
        string = string + t.thursday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        msg.reply(string);
    });
    return "";
}
function shedFriday(msg){
    request('https://api.jikan.moe/v3/schedule/friday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.friday).length;
            var i = 0;
            var string = "The shows that are on Friday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.friday[i].title);
                string = string + t.friday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.friday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        });
    return "";
}
function shedSaturday(msg){
    request('https://api.jikan.moe/v3/schedule/saturday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.saturday).length;
            var i = 0;
            var string = "The shows that are on Saturday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.saturday[i].title);
                string = string + t.saturday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.saturday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        });
        return "";
}
function shedSunday(msg){
    request('https://api.jikan.moe/v3/schedule/sunday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.sunday).length;
            var i = 0;
            var string = "The shows that are on Sunday are ";
            while(i<sizeTues-1){
                console.log(i);
                console.log(t.sunday[i].title);
                string = string + t.sunday[i].title;
                i++
                if(i<sizeTues-1)
                    string = string + ", "
            } 
            string = string + " and ";
            string = string + t.sunday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            msg.reply(string);
        })
        return "";
}
function todayOrTomorrow(msg,lowWeekDay){
    if(lowWeekDay === 'monday'){
        shedMonday(msg);
    }else if (lowWeekDay === 'tuesday'){
        shedTuesday(msg);
    }else if (lowWeekDay === 'wednesday'){
        shedWednesday(msg);
    }else if (lowWeekDay === 'thursday'){
       shedThursday(msg);
    }else if (lowWeekDay === 'friday'){
        shedFriday(msg);
    }
    else if (lowWeekDay === 'saturday'){
        shedSaturday(msg);
    }else{
        shedSunday(msg);
    }
}