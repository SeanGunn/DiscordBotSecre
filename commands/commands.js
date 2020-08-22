const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    var string = "__**The commands that are currently functional are: **__\n";
    message.channel.send(string);

    //week schedule
    string = "**Weekly anime schedule: **";
    string = string + "\nUsage: .schedule";
    string = string + "\nDescription: Gives a list of anime that air through the week and their MAL scores.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //daily anime schedule
    string = "**\nDaily anime schedule: **";
    string = string + "\nUsage: .monday, .tuesday, .wednesday, .thursday, .friday, .saturday, .sunday, .today and .tomorrow";
    string = string + "\nDescription: Gives a list of anime that air through on the day typed and their MAL scores.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //Ecommony
    string = "**\nEconomy: **";
    string = string + "\nUsage: .money";
    string = string + "\nDescription: Shows how many tokens you currently have.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    string = string + "\nUsage: .resetTokens";
    string = string + "\nDescription: Resets your token amount to base (1000).";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    string = string + "\nUsage: .redeemTokens";
    string = string + "\nDescription: Increases your amount of tokens based on when you last redeemed. Every 5 mins is 20 tokens.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //Games
    string = "**\nGames: **";
    string = string + "\nUsage: .flip **flipAmount** ";
    string = string + "\nDescription: Flips x amound of coins and tells you what the flip were.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    string = string + "\nUsage: .dice **rollAmount** ";
    string = string + "\nDescription: Rolls x amound of 6 sized dices and tells you what the rolls were.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //Gambling
    string = "**\nGambling: **";
    string = string + "\nUsage: .gf **tokenAmount h/t** ";
    string = string + "\nDescription: Changes your token amount based on if you win a coin flip.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //Search
    string = "**\nSearching mal database: **";
    string = string + "\nUsage: .search **anime/manga/movie/novel/ova searchCriteria** ";
    string = string + "\nDescription: Searchs MAL database for animes/mangas/movies/novels or ovas based what what the user enters as the search criteria. The top 3 results are displayed with their discription and MAL scores.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: None";
    message.channel.send(string);

    //Clear
    string = "**\nClear: **";
    string = string + "\nUsage: .clear **messageClearAmount** ";
    string = string + "\nDescription: Deletes messages from the server.";
    string = string + "\nAccessable by: Everyone";
    string = string + "\nPermissions needed: Manage_messages";
    message.channel.send(string);

    //Kick
    string = "**\nKick: **";
    string = string + "\nUsage: .kick **@userTag** ";
    string = string + "\nDescription: Kicks the user from the server.";
    string = string + "\nAccessable by: Admins";
    string = string + "\nPermissions needed: Kick_members";
    message.channel.send(string);
    
    //Ban
    string = "**\nBan: **";
    string = string + "\nUsage: .ban **@userTag** ";
    string = string + "\nDescription: Bans the user from the server.";
    string = string + "\nAccessable by: Admins";
    string = string + "\nPermissions needed: Ban_members";
    message.channel.send(string);
}

module.exports.config = {
    name: "commands",
    description: "Shows all the commands on the server.",
    usage: ".commands",
    accessableby: "Members",
    aliases: []
}
