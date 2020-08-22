const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

module.exports.run = async (bot, message, args) => {
    
    return redeemTokensFunction(message.member.id);
}

module.exports.config = {
    name: "redeemTokens",
    description: "Updates your token amound based on when you last redeemed.",
    usage: ".redeem",
    accessableby: "Members",
    aliases: ['redeemTokens']
}

async function redeemTokensFunction(userId){
    var client = new MongoClient(uri, { useNewUrlParser: true });
    try{
        console.log("redeem?");
        await client.connect();
        var result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
        console.log("here 5");
        if(result){
            var tokensAmount;
            var lastRedeemed;
            console.log("Found a user already 2");
            console.log(result);
            tokensAmount = result.tokens;
            console.log(tokensAmount);
            lastRedeemed = result.redeemed;
            console.log(lastRedeemed);
            var redeemDate = Date.now();
            //turns to seconds
            var timeDiff = redeemDate - lastRedeemed;
            console.log(timeDiff);
            timeDiff = Math.floor(timeDiff / 1000);
            console.log(timeDiff);
            //new point every 5 mins
            timeDiff = (timeDiff*60)*5;
            console.log(timeDiff);
            //each 5 mins is 20 points
            timeDiff = timeDiff*20;
            tokensAmount = tokensAmount+timeDiff;
            var updatedInformation ={
                user: userId,
                tokens: tokensAmount,
                redeemed: redeemDate
            };
            var result = await client.db("SecreBot").collection("Tokens").updateOne({user: userId},{$set: updatedInformation});
            console.log(`${result.matchedCount} document(s) matched the query criteria.`);
            console.log(`${result.modifiedCount} document(s) was/were updated.`);
            await client.close();
            return message.reply("**Your tokens have been increased.**\nYour new token balance is "+tokensAmount+".");
        }else{
            console.log("Their was a error finding the user.");
        }
    }catch(err){
        console.error(err);
    }
    return message,reply("Their was a error redeeming tokens. Try again.");
}