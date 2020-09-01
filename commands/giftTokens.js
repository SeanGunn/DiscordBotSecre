const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

module.exports.run = async (bot, message, args) => {
    let giftAmount = args[0];
    let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    let string;
    let newValueOfTokens;
    var members = message.mentions.members.first();
    console.log(members);
    if(isNaN(args[0])){
        if(args[0].toLowerCase() === ("all")){
            if(members){
                try{
                    await client.connect();
                    await checkUserNew(client,message.member.id);
                    string = await tokensOwn(client,message.member.id);
                    console.log("They have "+string);
                    giftAmount = string;
                    console.log("They gambling "+giftAmount);
                    newValueOfTokens = 0;
                    console.log("the new amount of tokens they current have if they lose "+newValueOfTokens);
                    await client.close();
                    if(newValueOfTokens < 0){
                        return message.reply("Max you can give away is "+string+".").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);
                    }
                    return await giftCoins(members.id,members.username,message,giftAmount,message.member.id);
                }catch(err){
                    console.error(err);
                }
            }
            return message.reply("Could not find user mentioned.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
        }
        else if(args[0].toLowerCase() === ("half")){
            if(members){
                try{
                    await client.connect();
                    await checkUserNew(client,message.member.id);
                    string = await tokensOwn(client,message.member.id);
                    console.log("They have "+string);
                    giftAmount = Math.round(string /2);
                    console.log("They gambling "+giftAmount);
                    newValueOfTokens = string - giftAmount;
                    console.log("the new amount of tokens they current have if they lose "+newValueOfTokens);
                    await client.close();
                    if(newValueOfTokens < 0){
                        return message.reply("Max you can give away is "+string+".").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);
                    }
                    return await giftCoins(members.id,members.username,message,giftAmount,message.member.id);
                }catch(err){
                    console.error(err);
                }
            }
            return message.reply("Could not find user mentioned.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
        }
        return message.reply("Enter a number after the command to gift tokens.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if((args[0]) === ""){
        return message.reply("Enter a number after the command to gift tokens.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }
    if((args[1]) === ""){
        return message.reply("Enter a user by @mention after the command and amount to gift tokens.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);
    }
     if(member){
        try{
            await client.connect();
            await checkUserNew(client,message.member.id);
            string = await tokensOwn(client,message.member.id);
            console.log("They have "+string);
            console.log("They gambling "+gambleAmount);
            newValueOfTokens = string - gambleAmount;
            console.log("the new amount of tokens they current have if they lose "+newValueOfTokens);
            await client.close();
            if(newValueOfTokens < 0){
                return message.reply("Max you can give away is "+string+".").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);
            }
            return await giftCoins(members.id,members.username,message,giftAmount,message.member.id);
        }catch(err){
            console.error(err);
        } 
    }
    return message.reply("Could not find user mentioned.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
}  
   

module.exports.config = {
    name: "gift",
    description: "Gift some of your tokens to a different user.",
    usage: ".gifttokens",
    accessableby: "Members",
    aliases: ['gifttokens']
}

async function giftCoins(giftToo,userNameToGift,message,giftAmount,userId){
    await updateDatebaseTokensGive(giftToo,giftAmount);
    await updateDatebaseTokensLost(userId,giftAmount);
    return message.channel.send("**You gave away "+giftAmount+" of tokens to "+userNameToGift+".**");
}


async function updateDatebaseTokensGive(userId,tokens){
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