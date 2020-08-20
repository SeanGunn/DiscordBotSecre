const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

module.exports.run = async (bot, message, args) => {
    var client = new MongoClient(uri, { useNewUrlParser: true });
    try{
        await client.connect();
        var updatedInformation ={
            user: message.member.id,
            tokens: 1000
        };
        var result = await client.db("SecreBot").collection("Tokens").updateOne({user: message.member.id},{$set: updatedInformation});
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
    return message.reply("**Your tokens was reset back to 1000.**");
}

module.exports.config = {
    name: "resetTokens",
    description: "Gamble tokens based on a call and win or lose tokens based on what comes back",
    usage: ".resetTokens",
    accessableby: "Members",
    aliases: ['resetTokens']
}