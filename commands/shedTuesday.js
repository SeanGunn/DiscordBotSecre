var request = require('request');

function shedTuesday(message){
    request('https://api.jikan.moe/v3/schedule/tuesday', function (error, response, body) {
        var t = JSON.parse(body);
        var sizeTues = Object.keys(t.tuesday).length;
        var i = 0;
        var string = "The shows that are on Tuesday are: \n ";
        while(i<sizeTues-1){
            console.log(i);
            console.log(t.tuesday[i].title);
            string = string + t.tuesday[i].title;
            i++
            if(i<sizeTues-1)
                string = string + ",\n "
        } 
        string = string + " and ";
        string = string + t.tuesday[sizeTues-1].title;
        string = string +".";
        console.log(string);
        string = string + "<:secre_pathetic:743119690859020320>";
        return message.channel.send(string);
    });
}