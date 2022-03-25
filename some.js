Array.prototype.mySome = function (callbackFn) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callbackFn(this[index], index, this)) {
                return true
            }
        }
    }
    return false
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.mySome(function (value, index, array) {
    return value == 3
}))

console.log(arr.mySome(function (value, index, array) {
    return value == 6
}))