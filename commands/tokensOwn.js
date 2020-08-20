const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";
const client = new MongoClient(uri, {  useUnifiedTopology: true });

module.exports.run = async (bot, message, args) => {

try{
    console.log(message.member.id);
    await client.connect();
    await createUser(client,{
        user: message.member.id,
        tokens: 1000
    });
}catch(err){
    console.error(err);
}finally{
    await client.close();
}

    return message.reply("string");
}

module.exports.config = {
    name: "£",
    description: "Shows how many tokens you current own",
    usage: ".£",
    accessableby: "Members",
    aliases: ['£']
}

async function createUser(client, user){
    const result = await client.db("SecreBot").collection("Tokens").insertOne(user);
    console.log(`New user created with the following id: ${result.insertedId}`);
}