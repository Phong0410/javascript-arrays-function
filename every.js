Array.prototype.myEvery = function (callbackFn) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (!(callbackFn(this[index], index, this))) {
                return false
            }
        }
    }
    return true
}

const arr = [1, 2, 3, 4, 5]
const arr2 = [3, 3, 3]

console.log(arr.myEvery(function (value, index, array) {
    return value == 1
}))

console.log(arr2.myEvery(function (value, index, array) {
    return value == 3
}))