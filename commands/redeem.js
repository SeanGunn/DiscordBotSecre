const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

module.exports.run = async (bot, message, args) => {
    console.log("redeem 1?");
    var string;
    var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        console.log("redeem?");
        await client.connect();
        var result = await client.db("SecreBot").collection("Tokens").findOne({user: message.member.id});
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
            timeDiff = (timeDiff)*5;
            console.log(timeDiff);
            //each 5 mins is 20 points
            timeDiff = timeDiff*1;
            tokensAmount = tokensAmount+timeDiff;
            var updatedInformation ={
                user: message.member.id,
                tokens: tokensAmount,
                redeemed: redeemDate
            };
            var result = await client.db("SecreBot").collection("Tokens").updateOne({user: message.member.id},{$set: updatedInformation});
            console.log(`${result.matchedCount} document(s) matched the query criteria.`);
            console.log(`${result.modifiedCount} document(s) was/were updated.`);
            await client.close();
            string = "**Your tokens have been increased.**\nYour new token balance is "+tokensAmount+".";
            return message.reply(string);
        }else{
            console.log("Their was a error finding the user.");
        }
    }catch(err){
        console.error(err);
    }
    string ="Their was a error redeeming tokens. Try again.";
    return message.reply(string);
}

module.exports.config = {
    name: "redeemTokens",
    description: "Updates your token amound based on when you last redeemed.",
    usage: ".redeemTokens",
    accessableby: "Members",
    aliases: ['redeemTokens']
}
