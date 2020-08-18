function todayOrTomorrow(msg,lowWeekDay){
    if(lowWeekDay === 'monday'){
        return shedMonday(msg);
    }else if (lowWeekDay === 'tuesday'){
        return shedTuesday(msg);
    }else if (lowWeekDay === 'wednesday'){
        return shedWednesday(msg);
    }else if (lowWeekDay === 'thursday'){
       return shedThursday(msg);
    }else if (lowWeekDay === 'friday'){
        return shedFriday(msg);
    }
    else if (lowWeekDay === 'saturday'){
        return shedSaturday(msg);
    }else{
        return shedSunday(msg);
    }
}