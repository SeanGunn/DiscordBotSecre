let request = require('request');

const myFun = async() => {
    let string = "__**The shows that are on Wednesday are: **__\n";
    request('https://api.jikan.moe/v3/schedule/wednesday', function (error, response, body) {
        let t = JSON.parse(body);
        let sizeTues = Object.keys(t.wednesday).length;
        let i = 0;
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
        string = string + "<:secre_pathetic:743119690859020320>";
        return string;
    });
    let state = false;

    setTimeout(() => {state = true}, 2000);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state) {
                console.log(string);
                resolve(string);
            } else {
                reject('State is false');
            }
        }, 2000);
    });
}

const wF = async () => {
    return await myFun();
}

module.exports = {wF}