const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

module.exports.run = async (bot, message, args) => {

    if(isNaN(args[0])){
        return message.reply("Enter a number after the command to gamble.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }
    if((!args[1] === ("t" || "h"))){
        return message.reply("Enter a t or h after the command and amount to gamble.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }
    let gambleAmount = args[0];
    let flipType = args[1];

    return await flipCoins(flipType,message,gambleAmount,message.member.id);
}

module.exports.config = {
    name: "gf",
    description: "Gamble tokens based on a call and win or lose tokens based on what comes back",
    usage: ".gf",
    accessableby: "Members",
    aliases: ['gf']
}

async function flipCoins(type,message,gamble,userId){
    var flipValue = getRandom50Chance();
    var string = "__**The outcomes for 1 flips was: **__\n"
    if(flipValue === "heads"){
        string = string+ "heads";
        if(type === "h"){
            gamble = gamble * 2;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokens(userId,gamble);
            return message.channel.send(string);
        }else{
            gamble = 0;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokens(userId,gamble);
            return message.channel.send(string);
        }
    }else{
        string = string+ "tails";
        if(type === "t"){
            gamble = gamble * 2;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokens(userId,gamble);
            return message.channel.send(string);
        }else{
            gamble = 0;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokens(userId,gamble);
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

async function updateDatebaseTokens(userId,tokens){
    var client = new MongoClient(uri, { useNewUrlParser: true });
    try{
        await client.connect();
        var result = await client.db("SecreBot").collection("Tokens").updateOne({user: userId},{tokens: tokens});
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}