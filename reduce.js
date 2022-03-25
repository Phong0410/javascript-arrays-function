Array.prototype.myReduce = function (callbackFn, accumulator) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (arguments.length == 1 && index == 0) {
                accumulator = this[index]
            } else {
                accumulator = callbackFn(accumulator, this[index], index, this)
            }
        }
    }
    return accumulator
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.myReduce(function (accumulator, value) {
    return accumulator + value
}))