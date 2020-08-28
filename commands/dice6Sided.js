const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {

    if(isNaN(args[0])){
        return message.reply("Enter a number after the command to roll a six sided fice.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }else if (parseInt(args[0]) <= 0) {
        return message.reply("Input a number greater then 0. Not any decimals numbers.").then(message => { message.delete({ timeout: 10000 }) }).catch(console.error);

    }

    let flipAmount = 0;
    if (parseInt(args[0]) > 100) {
        flipAmount = 100;
    } else {
        flipAmount = parseInt(args[0]);
    }

    return flipDices(flipAmount,message);
}

module.exports.config = {
    name: "6SizedDice",
    description: "Roll amount of 6 sized dices based on input",
    usage: ".dice",
    accessableby: "Members",
    aliases: ['dice']
}

function flipDices(amount,message){
    let i = 0;
    let string = "__**The outcomes for "+amount+" rolls are: **__\n"
    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;
    while(i < amount){
        let roll = getRandomRoll();
        if(roll === "1"){
            string = string+ "1 ";
            one++;
        }
        else if(roll === "2"){
            string = string+ "2 ";
            two++;
        }
        else if(roll === "3"){
            string = string+ "3 ";
            three++;
        }
        else if(roll === "4"){
            string = string+ "4 ";
            four++;
        }
        else if(roll === "5"){
            string = string+ "5 ";
            five++;
        }
        else{
            string = string+ "6 ";
            six++;
        }
         i++;
    }
    string = string + "\n**The outcomes was "+one+" one, "+two+" two, "+three+" three, "+four+" four, "+five+" five and "+six+" six.**";
    return message.channel.send(string);
}


function getRandomRoll() {
    let value = Math.random();
    let sideOnDice = "1";
    if(value <= 1/6){
        sideOnDice = "1";
    }
    else if((value > 1/6)&&(value <= 2/6)){
        sideOnDice = "2";
    }
    else if((value > 2/6)&&(value <= 3/6)){
        sideOnDice = "3";
    }
    else if((value > 3/6)&&(value <= 4/6)){
        sideOnDice = "4";
    }
    else if((value > 4/6)&&(value <= 5/6)){
        sideOnDice = "5";
    }
    else{
        sideOnDice = "6";
    }
    return sideOnDice;
}