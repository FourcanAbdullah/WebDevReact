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

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex) {
    let i = 0                           //value i =0
    if (fromIndex !== undefined) {      //if fromIndex exists then
        i = fromIndex                   //set i to the fromIndex
    }
    if (i >= this.length) {             //if i is grater the the array length
        return false;                   //immediatly return false
    }
    if (i < 0) {                        //if i is negative
        i = this.length + i             //find offset
        if (i < 0) {                    //if offse tis negative
            i = 0                       //just set i back to 0
        }
    }

    for (i; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (searchElement === this[i]) {        //if you can find the value
            return true                 //then return true
        }

    }

    return false;           //else false

};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, fromIndex) {
    let i = 0
    if (fromIndex !== undefined) {
        i = fromIndex
    }
    if (i >= this.length) {
        return -1;              //if i is greater then the array legnth return -1
    }
    if (i < 0) {
        i = this.length + i
        if (i < 0) {
            i = 0
        }
    }
    for (i; i < this.length; i++) {
        if (this[i] === undefined) continue;
        if (searchElement === this[i]) {
            return i;                   //for the value needing to be found return position in array
        }

    }
    return -1;

};

// PUSH //
Array.prototype.myPush = function (...args) {
    let argindex = 0
    for (let i = this.length; i < this.length + args.length; i++) {
        this[i] = args[argindex];
        argindex++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, fromIndex) {
    let i = this.length
    if (fromIndex !== undefined) {
        i = fromIndex
    }
    if (i >= this.length) {
        i = this.length;
    }
    if (i < 0) {
        i = this.length + i
        if (i < 0) {
            return -1;
        }
    }
    for (i; i >= 0; i--) {                      //loop array backwords
        if (this[i] === undefined) continue;
        if (searchElement === this[i]) {
            return i;
        }

    }
    return -1;
};

// KEYS //
Object.grabKeys = function (obj) {
    let temparr = []            //create array
    for (let i in obj) {        //loop through object
        temparr.push(i);        //push the keys into array
    }

    return temparr;             //return array
};

// VALUES //
Object.grabValues = function (obj) {
    let temparr = []            //create array
    for (let i in obj) {        //loop through object
        temparr.push(obj[i]);   //pish value of key into array
    }

    return temparr;             //return that array

};