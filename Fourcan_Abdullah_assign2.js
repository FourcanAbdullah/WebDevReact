// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {     //loop through the array
        if (this[i] === undefined) continue;    //if value is undefined, continue
        callbackFn(this[i], i, this);           //run the funtion with the array values
    }

};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    const temparray = [];                               //create new empty array
    for (let i = 0; i < this.length; i++) {             //loop through the array
        if (this[i] === undefined) continue;            //if value is undefined, continue
        temparray.push(callbackFn(this[i], i, this));   //push the mapped values into the new array
    }
    return temparray;                                   //return the new array
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
    const temparray = [];                               //create new array
    for (let i = 0; i < this.length; i++) {             //loop through the array
        if (this[i] === undefined) continue;            //value is undefined then continue
        if (callbackFn(this[i], i, this) === true) {    //if the calbackfn returns true
            temparray.push(this[i]);                    //push into the array
        }
        else continue;
    }
    return temparray;                                   //return the new array
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {             //loop through the array
        if (this[i] === undefined) continue;            //if undefined continue
        if (callbackFn(this[i], i, this) === true) {       //if the callback funtion return true
            return true                                 //return true
        }
    }

    return false;                                       //if the callbackfuntion never returns true return false
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {             //loop through the array
        if (this[i] === undefined) continue;            //if vlaue is undefined then continue
        if (callbackFn(this[i], i, this) !== true) {    //if funtion isnt true
            return false;                               //return false
        }
    }

    return true;                                        //if the array is all correct then return true
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initialval) {

    let tempint = 0                             //create a temp value
    if (initialval !== undefined) {             //if the initial value  exist then
        tempint = initialval                    //sent tempint to the initialvalue
    }
    for (let i = 0; i < this.length; i++) {     //loop through the array
        if (this[i] === undefined) continue;                //if undifened continue
        tempint = callbackFn(tempint, this[i], i, this);    //store callbackfuntion into tempint to use cack into callbackfn

    }

    return tempint;         //returnt he final value
};