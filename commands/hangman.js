const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const listOfWords = new Array("sean","asta","secre","black clover","yuno", "yami");

module.exports.run = async (bot, message, args) => {
    var guesses = 0;
    var amountOfWords = listOfWords.size;
    var word = listOfWords[getRandomInt(amountOfWords)];
    var sizeOfWord = word.size;
    var blanks = "_ "*sizeOfWord;
    var guessesList = []
    var wordsForUser;
    wordsForUser = wordsForUser + "Lets play hangman!\n";
    wordsForUser = wordsForUser + HanganManScaffold(guesses, word);
    wordsForUser = wordsForUser + "\n";
    wordsForUser = wordsForUser + "" + blanks;
    wordsForUser = wordsForUser + "\nGuess a letter.\n";
    message.channel.send();
    message.channel.send(wordsForUser);
    var exit = ".exit";
    while (guesses < 7 ){
        var guess = bot.wait_for('message',check = check);
        guess = guess.toLocaleLowerCase();
        if((guess == word)&&(guess.size > 1)){
            message.channel.send("\nYou win. The word was" +word);
            guesses = 7;
        }
        else if((guess != word) &&(guess.size > 1)){
            message.channel.send("You lose! The word was "+word);
            guesses = 7;
            msg.reply(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            guesses++;
            guessesList.push(guess);
            message.channel.send(HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == false)&&(guessesList.contain(guess)==true)&&(guess.size == 1)){
            message.channel.send("Write a new letter.\n"+HanganManScaffold(guess,word));
        }
        else if((word.contain(guess) == true)&&(guessesList.contain(guess)==false)&&(guess.size == 1)){
            message.channel.send("The word contains the letter "+guess+"\n"+HanganManScaffold(guess,word));
        }else if(guess == exit){
            guesses = 7;
        }
    }
    return message.channel.send('Hangman is now over.');
}

module.exports.config = {
    name: "hello",
    description: "Starts a hangman game",
    usage: ".hangmanSecre",
    accessableby: "Members",
    aliases: []
}