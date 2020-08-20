const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');

module.exports.run = async (bot, message, args) => {

    if(isNaN(args[0])){
        return message.reply("Enter a number after the command to gamble.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }
    if((args[1] != "t" )||(args[1] != "h")){
        return message.reply("Enter a t or h after the command and amount to gamble.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }
    let gambleAmount = args[0];
    let flipType = args[1];

    return flipCoins(flipType,message,gambleAmount);
}

module.exports.config = {
    name: "gf",
    description: "Gamble tokens based on a call and win or lose tokens based on what comes back",
    usage: ".gf",
    accessableby: "Members",
    aliases: ['gf']
}

function flipCoins(type,message,gamble){
    var flipValue = getRandom50Chance();
    if(flipValue === "heads"){
        var string = "__**The outcomes for 1 flips was: **__\n"
        string = string+ "heads";
        if(type === "h"){
            gamble = gamble * 2;
            string = string + "\n**The was "+flipValue+".**";
            string = string + "\n**You earned "+gamble+" tokens.**";
            return message.channel.send(string);
        }else{
            gamble = 0;
            string = string + "\n**The was "+flipValue+".**";
            string = string + "\n**You earned "+gamble+" tokens.**";
            return message.channel.send(string);
        }
    }else{
        string = string+ "tails";
        if(type === "t"){
            gamble = gamble * 2;
            string = string + "\n**The was "+flipValue+".**";
            string = string + "\n**You earned "+gamble+" tokens.**";
            return message.channel.send(string);
        }else{
            gamble = 0;
            string = string + "\n**The was "+flipValue+".**";
            string = string + "\n**You earned "+gamble+" tokens.**";
            return message.channel.send(string);
        }
    }
}


function getRandom50Chance() {
    var value = Math.random();
    var headsOrTails;
    if(value <= 0.5){
        headsOrTails = "heads";
    }
    else{
        headsOrTails = "tails";
    }
    return headsOrTails;
}