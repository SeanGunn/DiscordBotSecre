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
    checkUserNew(client,message.member.id);
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
    var result = await client.db("SecreBot").collection("Tokens").insertOne(user);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

async function checkUserNew(client,userId){
   var result = await client.db("SeacreBot").collection("Tokens").findOne({user: userId});
   if(result){
       console.log("Found a user already");
       console.log(result);
   }else{
       console.log("New user");
       await createUser(client,{
        user: userId,
        tokens: 1000
    });
   }
}