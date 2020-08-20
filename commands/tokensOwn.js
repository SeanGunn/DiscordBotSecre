const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

module.exports.run = async (bot, message, args) => {
var string;
try{
    console.log(message.member.id);
    await client.connect();
    checkUserNew(client,message.member.id);
    await client.close();
    console.log("here 1");
    await client.connect();
    string = await tokensOwn(client,message.member.id);
    await client.close();
}catch(err){
    console.error(err);
}
    

    return message.reply(string);
}

module.exports.config = {
    name: "money",
    description: "Shows how many tokens you current own",
    usage: ".money",
    accessableby: "Members",
    aliases: ['money']
}

async function createUser(client, user){
    const result = await client.db("SecreBot").collection("Tokens").insertOne(user);
    console.log(`New user created with the following id: ${result.insertedId}`);
}

async function checkUserNew(client,userId){
console.log("user id is: "+ userId);
   var result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
   if(result){
       console.log("Found a user already 1");
       console.log(result);
   }else{
       console.log("New user");
       await createUser(client,{
        user: userId,
        tokens: 1000
        });
   }
}

async function tokensOwn(client,userId){
    var tokensAmount;
    console.log("here 3");
    try {
        console.log("here 4");
        var result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
        console.log("here 5");
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
    return "Their was a error finding your token amount.";
}