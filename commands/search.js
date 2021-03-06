const request = require('request');

module.exports.run = async (bot, message, args) => {
    let type = args[0];
    let maxAmount = args.length;
    let whatSearchingFor;
    let trueName = args[1];
    whatSearchingFor = args[1];
    console.log(whatSearchingFor);
    let i = 2;
    if(maxAmount >= 3){
        while(i < maxAmount){
            whatSearchingFor = whatSearchingFor+"%20"+args[i];
            trueName  = trueName+" "+args[i];
            i++;
        }
    }
        
    whatSearchingFor = whatSearchingFor.toLowerCase();
    console.log(whatSearchingFor);
    let a = 1;
    console.log(type);
    type = type.toLowerCase();
    if((type) ==="anime"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="ova"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="movie"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="manga"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else if((type) ==="novel"){
        return getAnimeMangaSoOn(message,type,whatSearchingFor,trueName);
    }
    else{
        return message.reply("Enter a correct type after the command to search. The correct types are anime, ova, movie, manga and novel").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
    }
}

module.exports.config = {
    name: "search",
    description: "Searches for anime based on input",
    usage: ".search",
    accessableby: "Members",
    aliases: ['search']
}

function getAnimeMangaSoOn(message,type,search,trueName){
    try{
        request('https://api.jikan.moe/v3/search/'+type+'?q='+search+'&page=1', function (error, response, body) {
            let t = JSON.parse(body);
            if(t.error === null){
                return message.reply("Make sure the spelling is correct for the search to work, or the search value you typed doesn't exist.").then(message  => { message.delete({ timeout: 10000 }) }).catch(console.error);
            }else{
                let sizeTues = Object.keys(t.results).length;
                    if(sizeTues >= 3){
                    let string = "__**The top 3 "+type+" for the search "+trueName+" are: **__\n";
                    message.channel.send(string);
                }
                else{
                    let string = "__**The top "+sizeTues+" "+type+" for the search "+trueName+" are: **__\n";
                    message.channel.send(string);
                }
                let i = 0;
                while(i < sizeTues){
                    let string = "**"+t.results[i].title+":**\n";
                    string = string + "The synopsis is: \n"+t.results[i].synopsis;
                    if(t.results[i].score != null){
                        string = string + ("\nCurrently has a score of ")+t.results[i].score+(" on mal.");
                    }
                    else{
                        string = string + ("\nCurrently there is not a score on mal.");
                    }
                    i++;
                    message.channel.send(string);
                    if(i > 2)
                        return message.channel.send("<:secre_pathetic:743119690859020320>");
                }
            }
            
        });
    }
    catch(err){
        console.log(err);
        return message.reply("Make sure the spelling is correct for the search to work");
    }
}