Array.prototype.myMap = function (callbackFn) {
    let outputArray = []
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            outputArray.push(callbackFn(this[index], index, this))
        }
    }
    return outputArray
}

var arr = [1, 2, 3, 4, 5]
console.log(arr.myMap(function (value, index, array) {
    return value + 1
}))