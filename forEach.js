Array.prototype.myForEach = function (callbackFn) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callbackFn(this[index], index, this)
        }
    }
}

const arr = [1, 2, 3, 4, 5]
arr.myForEach(function (value, index) {
    console.log(index, value)
})