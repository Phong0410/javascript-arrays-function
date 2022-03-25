Array.prototype.myFilter = function (callbackFn) {
    array = []
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callbackFn(this[index], index, this)) {
                array.push(this[index])
            }
        }
    }
    return array
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.myFilter(function (value, index, array) {
    return index == 1
}))