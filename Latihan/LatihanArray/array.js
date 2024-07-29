// No Filter Array
const arr = [1,2,4,5,8,10]
let newArr = []
arr.forEach(ambil)

function ambil(item){
    if (item > 4)
        return newArr.push(item)
}

console.log(newArr)

// with filter array
const arr2 = [1,2,5,7,19,45]
let newArr2 = arr2.filter(ambil2)

function ambil2(array){
    return array > 6
}

console.log(newArr2)