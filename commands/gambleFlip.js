const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
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
    let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let string;
    let newValueOfTokens;
    try{
        await client.connect();
        await checkUserNew(client,message.member.id);
        string = await tokensOwn(client,message.member.id);
        newValueOfTokens = string - gambleAmount;
        console.log(newValueOfTokens);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
    if(newValueOfTokens < 0){
        return message.reply("Max you can gamble is "+string+".").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);
    }
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
    let flipValue = getRandom50Chance();
    let string = "__**The outcomes for 1 flips was: **__\n"
    type = type.toLowerCase();
    console.log("type: "+type);
    if(flipValue === "heads"){
        string = string+ "heads";
        if(type === "h"){
            gamble = gamble * 2;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokensWin(userId,gamble);
            return message.channel.send(string);
        }
        else{
            string = string + "\n**The flip was "+flipValue+". You lost "+gamble+" tokens.**";
            await updateDatebaseTokensLost(userId,gamble);
            return message.channel.send(string);
        }
    }else{
        string = string+ "tails";
        if(type === "t"){
            gamble = gamble * 2;
            string = string + "\n**The flip was "+flipValue+". You earned "+gamble+" tokens.**";
            await updateDatebaseTokensWin(userId,gamble);
            return message.channel.send(string);
        }
        else{
            string = string + "\n**The flip was "+flipValue+". You lost "+gamble+" tokens.**";
            await updateDatebaseTokensLost(userId,gamble);
            return message.channel.send(string);
        }
    }
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

async function updateDatebaseTokensWin(userId,tokens){
    let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let string;
    let newValueOfTokens;
    try{
        await client.connect();
        await checkUserNew(client,userId);
        string = await tokensOwn(client,userId);
        newValueOfTokens = string + tokens;
        console.log(newValueOfTokens);
        string = await redeemDate(client,userId);
        newValueOfredeemed = string;
        console.log(newValueOfredeemed);
        let updatedInformation ={
            user: userId,
            tokens: newValueOfTokens,
            redeemed: newValueOfredeemed
        };
        let result = await client.db("SecreBot").collection("Tokens").updateOne({user: userId},{$set: updatedInformation});
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}

async function updateDatebaseTokensLost(userId,tokens){
    let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let string;
    let newValueOfredeemed;
    try{
        await client.connect();
        await checkUserNew(client,userId);
        string = await tokensOwn(client,userId);
        newValueOfTokens = string - tokens;
        console.log(newValueOfTokens);
        string = await redeemDate(client,userId);
        newValueOfredeemed = string;
        console.log(newValueOfredeemed);
        let updatedInformation ={
            user: userId,
            tokens: newValueOfTokens,
            redeemed: newValueOfredeemed
        };
        let result = await client.db("SecreBot").collection("Tokens").updateOne({user: userId}, {$set: updatedInformation});
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}

async function tokensOwn(client,userId){
    let tokensAmount;
    try {
        let result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
        if(result){
            console.log("Found a user already 2");
            console.log(result);
            tokensAmount = result.tokens;
            console.log(tokensAmount);
            return tokensAmount;
        }else{
            console.log("Their was a error finding the user.");
        }
    }catch(err){
        console.error(err);
    }
}

async function redeemDate(client,userId){
    let tokensAmount;
    try {
        let result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
        if(result){
            console.log("Found a user already 2");
            console.log(result);
            tokensAmount = result.redeemed;
            console.log(tokensAmount);
            return tokensAmount;
        }else{
            console.log("Their was a error finding the user.");
        }
    }catch(err){
        console.error(err);
    }
}

async function checkUserNew(client,userId){
    console.log("user id is: "+ userId);
       let result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
       if(result){
           console.log("Found a user already 1");
           console.log(result);
       }else{
           console.log("New user");
           let redeemDate = Date.now();
           await createUser(client,{
            user: userId,
            tokens: 1000,
            redeemed: redeemDate
            });
       }
    }