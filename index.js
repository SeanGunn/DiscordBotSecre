const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
var request = require('request');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anyUser:A8aCI8lJ14aHILT3@cluster0.wfkj0.mongodb.net/SecreBot?retryWrites=true&w=majority";

const bot = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});


bot.on("message", async message => {

    if(message.author.bot || message.channel.type === "dm") return;
    
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    cmd = cmd.toLowerCase();
    let args = messageArray.slice(1).toLowerCase();
    
    if(!message.content.startsWith(prefix))
        return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile){
        let lowerCaseMessage = message.toLowerCase();
        commandfile.run(bot,message,args);
    }
        

})

bot.on("guildMemberAdd",member =>{
    console.log("User "+ member.user.username + " has joined the server!");
    member.guild.channels.get("general").send("Welcome to the server!").then(message  => {setMoney(member.user.username); }).catch(console.error);
})

bot.login(process.env.token);

async function setMoney(userId){
    var string;
    var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try{
        console.log(userId);
        await client.connect();
        checkUserNew(userId);
        console.log("here 1");
        string = await tokensOwn(client,userId);
        console.log(string);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}
 

async function checkUserNew(client,userId){
    console.log("user id is: "+ userId);
       var result = await client.db("SecreBot").collection("Tokens").findOne({user: userId});
       if(result){
           console.log("Found a user already 1");
           console.log(result);
       }else{
           console.log("New user");
           var redeemDate = Date.now();
           await createUser(client,{
            user: userId,
            tokens: 1000,
            redeemed: redeemDate
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