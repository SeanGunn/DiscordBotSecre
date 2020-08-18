const Discord = require('discord.js');
const Jikan = require('jikan-node');
var request = require('request');
const botsettings = require('./botsettings.json');
const mal = new Jikan();
const bot = new Discord.Client({disableEveryone: true});
const listOfWords = new Array("sean","asta","secre","black clover","yuno", "yami");

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("Making you my pet.")
    console.log('Best bird is online.');
    //read.channel.send("Best bird is now online. <:secre_blush:743040181275459645>");
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
        message.channel.send(string);
    })
    return string;
}

bot.on('message', async message =>{

    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    console.log(cmd);
    if(cmd === `${prefix}hi`){
        return message.channel.send("Hi my pet.");
    }

    if((cmd === `${prefix}hi`) || ((cmd === `${prefix}welcome`))){ 
        return message.reply('You are my pet now. <:secre_pathetic:743119690859020320>');
    }
    else if(cmd === `${prefix}simp`){ 
        return message.reply('You are my little simp. <:secre_blush:743040181275459645>');
    }
    /*else if(cmd === `${prefix}are you best girl`){
        return message.channel.send("<:secre_yes:743119658181197834>");
    }
    else if( temp == "are you my waifu"){
        return message.reply("<:secre_yes:743119658181197834>");
    }
    else if( temp == "best girl"){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    else if( temp == "best girl?"){
        msg.reply("<:secre_yes:743119658181197834>")
    }*/
    else if(cmd === `${prefix}waifu`){
        msg.reply("<:secre_yes:743119658181197834>")
    }
    /*else if( temp == "anyone else better"){
        msg.reply("<:secre_no:743119671984652320>");
    }
    else if( temp == "am i a sad person for making this"){
        msg.reply("<:secre_yes:743119658181197834>");
    }*/
    else if((cmd === `${prefix}schedule`)||(cmd === `${prefix}sch`)){
        request('https://api.jikan.moe/v3/schedule/', function (error, response, body) {
            //Mon
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.monday).length;
            var i = 0;
            var string = "\n\nThe shows that are on Monday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            //Tues
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.tuesday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Tuesday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            message.channel.send(string);
           //Wed
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.wednesday).length;
            var i = 0;
            var string = "\n\nThe shows that are on Wednesday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            //Thur
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.thursday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Thursday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            message.channel.send(string);
            //Fri
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.friday).length;
            var i = 0;
            var string = "\n\nThe shows that are on Friday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            //Sat
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.saturday).length;
            var i = 0;
            string = string+ "\nThe shows that are on Saturday are: \n";
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
            string = string +".\n\n";
            console.log(string);
            message.channel.send(string);
            //Sun
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.sunday).length;
            var i = 0;
            var string = "\n\nThe shows that are on Sunday are: \n";
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
            string = string +".\n";
            console.log(string);
            string = string + "<:secre_pathetic:743119690859020320>";
            return message.channel.send(string);
        });
    }
    else if((cmd === `${prefix}monday`)||(cmd === `${prefix}mon`)){
        return shedMonday(messsage);
    }
    else if((cmd === `${prefix}tuesday`)||(cmd === `${prefix}tue`)){
        return shedTuesday(message);
    }
    else if((cmd === `${prefix}wednesday`)||(cmd === `${prefix}wed`)){
        return shedWednesday(message);
    }
    else if((cmd === `${prefix}thursday`)||(cmd === `${prefix}thu`)){
        return shedThursday(message);
    }
    else if((cmd === `${prefix}friday`)||(cmd === `${prefix}fri`)){
        return shedFriday(message);
    }
    else if((cmd === `${prefix}saturday`)||(cmd === `${prefix}sat`)){
        return shedSaturday(message);
    }
    else if((cmd === `${prefix}sunday`)||(cmd === `${prefix}sun`)){
        return shedSunday(message);
    }
    else if(cmd === `${prefix}today`){
        var today = new Date();
        var weekDay = getWeekDay(today);
        var lowWeekDay = weekDay.toLowerCase();
        return todayOrTomorrow(messsage,lowWeekDay);
    }
    else if((cmd === `${prefix}tomorrow`)||(cmd === `${prefix}nextday`)){
        //What weekday is tomorrow?
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var weekDay = getWeekDay(tomorrow);
        var lowWeekDay = weekDay.toLowerCase();
        return todayOrTomorrow(message,lowWeekDay);
    }

    if(cmd === `${prefix}clear`){
        if(messsage.deletable){
            messsage.delete();
        }

        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            return message.reply("Missing Permissions").then(m => m.delete(5000));
        }

        if((isNaN(args[0]))||(parseInt(args[0]) <= 0)){
            return message.reply("This is not a number").then(m => m.delete(5000));
        }

        let deletableAmount;
        if(parseInt(arg[0])>100){
            deletableAmount = 100;
        }else{
            deletableAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deletableAmount, true).catch(err => message.reply(`Something went wrong... ${err}`));
    }
})

bot.login(process.env.token);

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
            message.channel.send(string);
        })
     return "";
}
function shedTuesday(message){
    var string = "The shows that are on Tuesday are: \n ";
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
            message.channel.send(string);
        });
        return "";
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
        message.channel.send(string);
    });
    return "";
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
        message.channel.send(string);
    });
    return "";
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
            message.channel.send(string);
        });
    return "";
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
            message.channel.send(string);
        });
        return "";
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
            message.channel.send(string);
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


function HangmanGame(message){
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
    message.channel.send();
    message.channel.send(wordsForUser);
    var exit = ".exit";
    while (guesses < 7 ){
        var guess = bot.wait_for('message',check = check);
        guess = guess.toLocaleLowerCase();
        if((guess == word)&&(guess.size > 1)){
            message.channel.send("\nYou win. The word was" +word);
            guesses = 7;
        }
        else if((guess != word) &&(guess.size > 1)){
            message.channel.send("You lose! The word was "+word);
            guesses = 7;
            msg.reply(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            guesses++;
            guessesList.push(guess);
            message.channel.send(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==true)&&(guess.size == 1)){
            message.channel.send("Write a new letter.\n"+HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == true)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            message.channel.send("The word contains the letter "+guess+"\n"+HanganManScaffold(guess,word));
        }else if(guess == exit){
            guesses = 7;
        }
    }
}
 