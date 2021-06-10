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