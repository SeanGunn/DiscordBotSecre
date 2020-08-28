var request = require('request');
/*
const mondayF = async function() {
    return new Promise(async (resolve,reject)=> {
        let returnValue = await getRequest();
        
        if(returnValue === undefined){
            reject("Undefined");
            setTimeout(function() {
                resolve();
            }, 1000);
            if(returnValue === undefined){
                reject("Undefined");
            }
        }
        else{
            console.log(returnValue);
            resolve(returnValue);
        }

    })
};*/

const myFun = async() => {
    let a = await getRequest();
    let state = false;

    setTimeout(() => {state = true}, 2000);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(state) {
                resolve(a);
            } else {
                reject('State is false');
            }
        }, 2000);
    });
}


const mF = async () => {
    return await myFun();
}


/*(function() {
    let mondayShed = "";

    const getMondayShedAsync = async (time) => {
        let returnValue = await getRequest();
        console.log("return value =\n"+returnValue);
        return new Promise(resolve => {
            //if(returnValue === undefined) throw new Error("Should = a value");
            setTimeout(() => resolve(returnValue), time);
        })
    }

    //const doSomething = async () => {
    async function getMondayShed() {
        let answer1 = await getMondayShedAsync(3000).catch(error =>{console.log(error);});
        console.log("the answer is: "+answer1);
        return answer1;
    }


    module.exports.getMondayShed = async function() {
        return getMondayShed();
    }
}());*/

module.exports = {mF}

async function getRequest() {
    request('https://api.jikan.moe/v3/schedule/monday', function (error, response, body) {
            var t = JSON.parse(body);
            var sizeTues = Object.keys(t.monday).length;
            var i = 0;
            var string = "__**The shows that are on Monday are: **__\n";
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
            string = string + "<:secre_pathetic:743119690859020320>";
            return string;
        })
}
