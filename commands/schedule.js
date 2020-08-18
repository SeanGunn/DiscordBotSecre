const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {
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

module.exports.config = {
    name: "shedule",
    description: "Answers what the weekly anime schedule is",
    usage: ".shedule",
    accessableby: "Members",
    aliases: []
}