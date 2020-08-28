const mondayShedule = require("./mondayShed");
const tuesdayShedule = require("./tuesdayShed");
const wedsShedule = require("./wednesdayShed");
const thursdayShedule = require("./thursdayShed");
const fridayShedule = require("./fridayShed");
const saturdayShedule = require("./saturdayShed");
const sundayShedule = require("./sundayShed");

const todayOrTomorrow = async(lowWeekDay) => {
    let string;
    if(lowWeekDay === 'monday'){
        let rt = await mondayShedule.mF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for monday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for monday.";
        } else {
            string = rt;
        }
    }else if (lowWeekDay === 'tuesday'){
        let rt = await tuesdayShedule.tF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for tuesday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for tuesday.";
        } else {
            string = rt;
        }
    }else if (lowWeekDay === 'wednesday'){
        let rt = await wedsShedule.wF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for wednesday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for wednesday.";
        } else {
            string = rt;
        }
    }else if (lowWeekDay === 'thursday'){
        let rt = await thursdayShedule.thF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for thursday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for thursday.";
        } else {
            string = rt;
        }
    }else if (lowWeekDay === 'friday'){
        let rt = await fridayShedule.fF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for friday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for friday.";
        } else {
            string = rt;
        }
    }
    else if (lowWeekDay === 'saturday'){
        let rt = await saturdayShedule.satF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for saturday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for saturday.";
        } else {
            string = rt;
        }
    }else if(lowWeekDay === 'sunday'){
        let rt = await sundayShedule.sunF();
        console.log("rt is = "+rt);
        if(rt === undefined){
            string = "Their was a problem getting the shedule for sunday.";
        } else if (rt === 'State is false') {
            string = "Their was a problem getting the shedule for sunday.";
        } else {
            string = rt;
        }
    }

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

const tOTF = async (date) => {
    return await todayOrTomorrow(date);
}

module.exports = {tOTF}