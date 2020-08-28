const request = require('request');
//Can't change to new layout since either char limit or to many requests to send and they can blocked so gonna have to keep as old version
module.exports.run = async (bot, message, args) => {
    request('https://api.jikan.moe/v3/schedule/', function (error, response, body) {
        //Mon
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.monday).length;
        let i = 0;
        let string = "__**The shows that are on Monday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.monday[i].title +(":**");
            if(t.monday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.monday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.monday[sizeTues-1].title+(":**");
        if(t.monday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.monday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
        //Tues
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.tuesday).length;
        let i = 0;
        let string = "__**The shows that are on Tuesday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.tuesday[i].title +(":**");
            if(t.tuesday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.tuesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.tuesday[sizeTues-1].title+(":**");
        if(t.tuesday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.tuesday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
       //Wed
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.wednesday).length;
        let i = 0;
        let string = "__**The shows that are on Wednesday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.wednesday[i].title +(":**");
            if(t.wednesday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.wednesday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.wednesday[sizeTues-1].title+(":**");
        if(t.wednesday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.wednesday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
        //Thur
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.thursday).length;
        let i = 0;
        let string = "__**The shows that are on Thursday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.thursday[i].title +(":**");
            if(t.thursday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.thursday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.thursday[sizeTues-1].title+(":**");
        if(t.thursday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.thursday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
        //Fri
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.friday).length;
        let i = 0;
        let string = "__**The shows that are on Friday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.friday[i].title +(":**");
            if(t.friday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.friday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.friday[sizeTues-1].title+(":**");
        if(t.friday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.friday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
        //Sat
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.saturday).length;
        let i = 0;
        let string = "__**The shows that are on Saturday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.saturday[i].title +(":**");
            if(t.saturday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.saturday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.saturday[sizeTues-1].title+(":**");
        if(t.saturday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.saturday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        message.channel.send(string);
        //Sun
        var t = JSON.parse(body);
        let sizeTues = Object.keys(t.sunday).length;
        let i = 0;
        let string = "__**The shows that are on Sunday are: **__\n";
        while(i<sizeTues-1){
            string = string +("**") +t.sunday[i].title +(":**");
            if(t.sunday[i].score != null){
                string = string + ("\n      Currently has a score of ")+t.sunday[i].score+(" on mal.");
            }
            else{
                string = string + ("\n      Currently there is not a score on mal.");
            }
            i++
            if(i<sizeTues-1)
                string = string + "\n"
        } 
        string = string + ("\n**")+t.sunday[sizeTues-1].title+(":**");
        if(t.sunday[sizeTues-1].score != null){
            string = string + ("\n      Currently has a score of ")+t.sunday[sizeTues-1].score+(" on mal.");
        }
        else{
            string = string + ("\n      Currently there is not a score on mal.");
        }
        string = string +"\n";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}

module.exports.config = {
    name: "schedule",
    description: "Answers what the weekly anime schedule is",
    usage: ".schedule",
    accessableby: "Members",
    aliases: ['sch']
}

