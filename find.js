Array.prototype.myFind = function (callbackFn) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callbackFn(this[index], index, this)) {
                return this[index]
            }
        }
    }
    return null
}

const arr = [1, 2, 3, 4, 5]

const arr2 = [
    {
        name: 'A',
        age: 18
    },
    {
        name: 'B',
        age: 20
    }
]

console.log(arr2.myFind(function (value, index, array) {
    return value.age == 20
}))