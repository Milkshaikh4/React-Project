

export const uuid = function(){ // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        // eslint-disable-next-line
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

/**
 * 
 * @param {Array}  arr
 * @param {Function} cb 
 */
export const reduceToBoolean = (arr, cb) => {
    for (let el of arr){
        if (!cb(el)){
            return false;
        }
    }
    return true;
};

export const luma = ([R, G, B]) => {
    return (R+R+R+B+G+G+G+G)>>3;
};

export const formatDate = (d) => {
    let date = d;
    if(typeof date === "string"){
        date = new Date(date);
    }
    const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December",
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

export const dateUtil = function(d){
    let date = d instanceof Date?d:new Date();
    const t = {
        milliseconds:1000,
        seconds:60,
        minutes:60,
        hours:24,
        days:7,
    };
    const periods = {
        milliseconds:ms => ms,
        seconds:ms => ms/(t.milliseconds),        
        minutes:ms => ms/(t.milliseconds * t.seconds),        
        hours:ms => ms/(t.milliseconds * t.seconds * t.minutes),
        days:ms => ms/(t.milliseconds * t.seconds * t.minutes * t.hours),
        weeks:ms => ms/(t.milliseconds * t.seconds * t.minutes * t.hours * t.days),
    };

    const difference = (date2, period) => {
        var timeDiff = Math.abs(date2.getTime() - date.getTime());
        if(period && periods[period]){
            return periods[period](timeDiff);
        }
        return timeDiff;
    };

    return {
        difference,
    };
};


export function find(arr, index, value){
    return arr.find(obj => {
        return obj[index] === value;
    });
}
