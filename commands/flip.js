const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if(isNaN(args[0])){
        return message.reply("Enter a number after the command to flip coins.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if((args[0]) === ""){
        return message.reply("Enter a number after the command to flip coins.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }

    let flipAmount = 0;
    if (parseInt(args[0]) > 100) {
        flipAmount = 100;
    } else {
        flipAmount = parseInt(args[0]);
    }

    return flipCoins(flipAmount,message);
}

module.exports.config = {
    name: "flip",
    description: "Flip amount of coins based on input",
    usage: ".flip",
    accessableby: "Members",
    aliases: ['flip']
}

function flipCoins(amount,message){
    let i = 0;
    let string = "__**The outcomes for "+amount+" flips are: **__\n"
    let heads = 0;
    let tails = 0;
    while(i < amount){
        if(getRandom50Chance() === "heads"){
            string = string+ "heads ";
            heads++;
        }else{
            string = string+ "tails ";
            tails++;
        }
         i++;
    }
    string = string + "\n**The outcomes for heads was "+heads+" amount of times and tails was "+tails+".**";
    return message.channel.send(string);
}


function getRandom50Chance() {
    let value = Math.random();
    let headsOrTails;
    if(value <= 0.5){
        headsOrTails = "heads";
    }
    else{
        headsOrTails = "tails";
    }
    return headsOrTails;
}