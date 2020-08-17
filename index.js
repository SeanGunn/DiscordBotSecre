const Discord = require('discord.js');
const Jikan = require('jikan-node');
var request = require('request');
const mal = new Jikan();
const bot = new Discord.Client();
const listOfWords = new Array("sean","asta","secre","black clover","yuno", "yami");

bot.on('ready',msg =>{
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
    if(temp == (("welcome")|| ('hello')|| ('hi'))){ 
        msg.reply('You are my pet now. <:secre_pathetic:743119690859020320>');
    }
    else if(temp == ("simp")){ 
        msg.reply('You are my little simp. <:secre_blush:743040181275459645>');
    }
    else if( temp == "are you best girl"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "are you my waifu"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "best girl"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "best girl?"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "waifu?"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "waifu"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "anyone else better"){
        msg.reply("<:secre_no:743119671984652320>");
    }
    else if( temp == "am i a sad person for making this"){
        msg.reply("<:secre_yes:743119658181197834>");
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
                    string = string + ",\n "
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
                    string = string + ",\n "
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
                    string = string + ",\n "
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
                    string = string + ",\n "
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
                    string = string + ",\n "
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
                    string = string + ",\n "
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
                    string = string + ",\n "
            } 
            string = string + " and ";
            string = string + t.sunday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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

bot.login(process.env.token);

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
                    string = string + ",\n "
            } 
            string = string + " and ";
            string = string + t.monday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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
                    string = string + ",\n "
            } 
            string = string + " and ";
            string = string + t.tuesday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.wednesday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
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
                string = string + ", \n"
        } 
        string = string + " and ";
        string = string + t.thursday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
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
                    string = string + ", \n"
            } 
            string = string + " and ";
            string = string + t.friday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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
                    string = string + ", \n"
            } 
            string = string + " and ";
            string = string + t.saturday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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
                    string = string + ", \n"
            } 
            string = string + " and ";
            string = string + t.sunday[sizeTues-1].title;
            string = string +".";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
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

function HanganManScaffold(guesses, wd){
    var scaf;
    if(guesses == 0){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 1){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 2){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 3){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 4){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 5){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n| ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 6){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n|   / ";
        scaf = scaf + "\n|--------";
        return scaf;
    }
    else if(guesses == 7){
        scaf = "\n---------";
        scaf = scaf + "\n|    |";
        scaf = scaf + "\n|    0";
        scaf = scaf + "\n|   \|/ ";
        scaf = scaf + "\n|    | ";
        scaf = scaf + "\n|   / \\";
        scaf = scaf + "\n|--------";
        scaf = scaf + "\n";
        scaf = scaf + "The word was "+wd;
        return scaf;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function HangmanGame(msg){
    var guesses = 0;
    var amountOfWords = listOfWords.size;
    var word = listOfWords[getRandomInt(amountOfWords)];
    var sizeOfWord = word.size;
    var blanks = "_ "*sizeOfWord;
    var guessesList = []
    var wordsForUser;
    wordsForUser = wordsForUser + "Lets play hangman!\n";
    wordsForUser = wordsForUser + HanganManScaffold(guesses, word);
    wordsForUser = wordsForUser + "\n";
    wordsForUser = wordsForUser + "" + blanks;
    wordsForUser = wordsForUser + "\nGuess a letter.\n";
    msg.reply(wordsForUser);
    var exit = ".exit";
    while (guesses < 7 ){
        var guess = bot.wait_for('message',check = check);
        guess = guess.toLocaleLowerCase();
        if((guess == word)&&(guess.size > 1)){
            msg.reply("\nYou win. The word was" +word);
            guesses = 7;
        }
        else if((guess != word) &&(guess.size > 1)){
            msg.reply("You lose! The word was "+word);
            guesses = 7;
            msg.reply(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            guesses++;
            guessesList.push(guess);
            msg.reply(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==true)&&(guess.size == 1)){
            msg.reply("Write a new letter.");
            msg.reply(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == true)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            msg.reply("The word contains the letter "+guess);
            msg.reply(HanganManScaffold(guess,word));
        }else if(guess == exit){
            guesses = 7;
        }
    }
}
 